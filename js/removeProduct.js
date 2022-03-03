import {getAllProducts, getProductById, makeRequest} from "./main.js";



export async function renderAllProducts(){

    let products = await getAllProducts();

    

    let select = document.getElementById("productSelect");

    products.forEach(product => {

        let option = document.createElement("option");
        option.value = product.ProductId;
        option.innerHTML = "ID = " + product.ProductId + " | " + product.ProductName;

        select.append(option);

    })

    document.getElementById("productSelect").addEventListener("change", async function(){

        renderSizes(productSelect.value);

    })

}

async function renderSizes(id) {

    let product = await getProductById(id);

    let sizes = product.Sizes;

    let container = document.getElementById("productSizeRenderContainer");
    container.innerHTML = "";

    sizes.forEach(size => {

        let sizeContainer = document.createElement("div");
        sizeContainer.classList.add("flex", "sizeContainer");
        

        let sizeText = document.createElement("p");
        sizeText.classList.add("sizeText");
        sizeText.innerHTML = size.Size;

        let input = document.createElement("input");
        input.classList.add("sizeInput");
        input.id = "updateSize" + size.Size;
        input.value = size.SizesInStock;
        input.type = "number";

        sizeContainer.append(sizeText, input);
        container.append(sizeContainer);

    })

    let buttonContainer = document.getElementById("removeProductButtonContainer")
    buttonContainer.innerHTML = "";

    let updateButton = document.createElement("div");
    updateButton.classList.add("button", "flex", "justifyCenter", "alignCenter");
    updateButton.style.marginRight = "10px";
    updateButton.innerHTML = "Update stock";
    updateButton.addEventListener("click", async function() {

        await updateStock(sizes)

        //UPDATE size SET SizesInStock=10 WHERE ID = 1


    })

    let deleteButton = document.createElement("div");
    deleteButton.classList.add("button", "flex", "justifyCenter", "alignCenter");
    deleteButton.style.backgroundColor = "red";
    deleteButton.innerHTML = "Delete Product";
    deleteButton.addEventListener("click", async function() {

        await removeProduct(product);

    })


    buttonContainer.append(updateButton, deleteButton);

}


async function updateStock(sizes) {

    if(document.getElementById("updateSize39").value === "" || isNaN(document.getElementById("updateSize39").value) || document.getElementById("updateSize40").value === "" || isNaN(document.getElementById("updateSize40").value) || document.getElementById("updateSize41").value  === "" || isNaN(document.getElementById("updateSize41").value) || document.getElementById("updateSize42").value === "" || isNaN(document.getElementById("updateSize42").value) || document.getElementById("updateSize43").value === "" || isNaN(document.getElementById("updateSize43").value) || document.getElementById("updateSize44").value === "" || isNaN(document.getElementById("updateSize44").value) || document.getElementById("updateSize45").value === "" || isNaN(document.getElementById("updateSize45").value) || document.getElementById("updateSize46").value === "" || isNaN(document.getElementById("updateSize46").value)){

        document.getElementById("sizeChangeReturn").innerHTML = "Please fill out all the fields.";

    }
    else {

        document.getElementById("sizeChangeReturn").innerHTML = "";

        sizes.forEach(size => {

            let input = document.getElementById("updateSize" + size.Size).value;

            size.SizesInStock = input;

        })

// Future improvement is to only push the stock values that have changed to a list and update.

        let action = "updateStock";

        let body = new FormData();
        body.append("sizes", JSON.stringify(sizes));

        let response = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "POST", body)

        
        if(response == "success") {
            document.getElementById("updateStockReturn").innerHTML = "The product was successfully updated!";
        }

    }

}

async function removeProduct(product) {

    let action = "deleteProduct";

    let body = new FormData();
    body.append("product", JSON.stringify(product));

    let response = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "DEL", body);

    if(response == "success") {

        document.getElementById("updateStockReturn").innerHTML = "The product was successfully removed!";

    }


}
