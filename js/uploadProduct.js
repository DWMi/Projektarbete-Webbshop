
import {makeRequest, getAllCategories} from "./main.js";


export async function newProduct(){

    if(document.getElementById("productName").value == "" || document.getElementById("productName").value == null || document.getElementById("productDescription").value == "" || document.getElementById("productDescription").value == null || document.getElementById("productPrice").value == "" || document.getElementById("productPrice").value == null) {
        document.getElementById("productInformationReturn").innerHTML= "Please fill out all the fields.";
    }
    else if(document.getElementById("39").value === "" || isNaN(document.getElementById("39").value) || document.getElementById("40").value === "" || isNaN(document.getElementById("40").value) || document.getElementById("41").value  === "" || isNaN(document.getElementById("41").value) || document.getElementById("42").value === "" || isNaN(document.getElementById("42").value) || document.getElementById("43").value === "" || isNaN(document.getElementById("43").value) || document.getElementById("44").value === "" || isNaN(document.getElementById("44").value) || document.getElementById("45").value === "" || isNaN(document.getElementById("45").value) || document.getElementById("46").value === "" || isNaN(document.getElementById("46").value) ) {
        document.getElementById("sizeInformationReturn").innerHTML= "Please fill out all the fields.";
        document.getElementById("productInformationReturn").innerHTML= "";
    }
    else if (!localStorage.getItem("choosenCategory")){
        document.getElementById("categoryInformationReturn").innerHTML = "Please choose a category.";
    }
    else if(document.getElementById("imageOne").files[0] == undefined || document.getElementById("imageTwo").files[0] == undefined || document.getElementById("imageThree").files[0] == undefined) {
        document.getElementById("productInformationReturn").innerHTML= "";
        document.getElementById("sizeInformationReturn").innerHTML= "";
        document.getElementById("categoryInformationReturn").innerHTML = "";
        document.getElementById("imageInformationReturn").innerHTML= "Please upload three images.";
    }
    else {
        document.getElementById("imageInformationReturn").innerHTML= "";

        let list = []

        let images = [];
        let imageOne = {
            "src" : document.getElementById("imageOne").files[0].name,
            "imgType": 1,
        }
        let imageTwo = {
            "src" : document.getElementById("imageTwo").files[0].name,
            "imgType": 2,
        }
        let imageThree = {
            "src" : document.getElementById("imageThree").files[0].name,
            "imgType": 3,
        }

        images.push(imageOne, imageTwo, imageThree);

        let imageFiles = []

        let uploadImageOne = {
            "file" : document.getElementById("imageOne").files[0],
        }
        let uploadImageTwo = {
            "file" : document.getElementById("imageTwo").files[0]
        }
        let uploadImageThree = {
            "file" : document.getElementById("imageThree").files[0]
        }

        imageFiles.push(uploadImageOne, uploadImageTwo, uploadImageThree);

        for( let i=0; i<imageFiles.length; i++){
            let checkedImage = await checkImages(imageFiles[i].file)

            if (checkedImage == "notAnImage"){
                document.getElementById("imageInformationReturn").innerHTML = "One of the files that you have uploaded is not an image.";
                return;
            } else if (checkedImage == "existingFile") {
                document.getElementById("imageInformationReturn").innerHTML = "One of the images that you want to upload already exists.";
                return;
            } else if (checkedImage == "fileSize") {
                document.getElementById("imageInformationReturn").innerHTML = "One of the images that you want to upload is to large.";
                return;
            } else if (checkedImage == "format") {
                document.getElementById("imageInformationReturn").innerHTML = "One of the images that you want to upload is of the wrong format, accepted formats are: .JPG & .PNG & .JPEG & .GIF";
                return;
            }

        }

        let productInformation = {};
        productInformation.name = document.getElementById("productName").value;
        productInformation.description = document.getElementById("productDescription").value;
        productInformation.price = document.getElementById("productPrice").value;

        let sizes = [];
        let size39 = {
            "stock" : parseInt(document.getElementById("39").value),
            "size" : 39
        };
        let size40 = {
            "stock" : parseInt(document.getElementById("40").value),
            "size" : 40
        };
        let size41 = {
            "stock" : parseInt(document.getElementById("41").value),
            "size" : 41
        };
        let size42 = {
            "stock" : parseInt(document.getElementById("42").value),
            "size" : 42
        };
        let size43 = {
            "stock" : parseInt(document.getElementById("43").value),
            "size" : 43
        };
        let size44 = {
            "stock" : parseInt(document.getElementById("44").value),
            "size" : 44
        };
        let size45 = {
            "stock" : parseInt(document.getElementById("45").value),
            "size" : 45
        };
        let size46 = {
            "stock" : parseInt(document.getElementById("46").value),
            "size" : 46
        };

        sizes.push(size39, size40, size41, size42, size43, size44, size45, size46);

        let choosenCategory = localStorage.getItem("choosenCategory");

        list.push(productInformation, sizes, images, choosenCategory)
            /* productResponse.style.display = "block";
            setTimeout(function(){ location.reload(); }, 2500); */

            let action = "newProduct";
            let body = new FormData();
            body.append("product", JSON.stringify(list));
            
            let response = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "POST", body);

            console.log(response);

            if (response > 0){
                for(let i=0; i<imageFiles.length; i++) {
    
                    let response = await uploadImage(imageFiles[i].file);
    
                }
                
                document.getElementById("productResponse").innerHTML = "Product saved!";
            } else {
                document.getElementById("productResponse").innerHTML = "Something went wrong saving your new product..";
            }

    }

}

export async function renderCategories() {

    let categories = await getAllCategories();

    var categoryContainer = document.getElementById("categories");
    categoryContainer.innerHTML = "";

    // check localStorage and render button green



    categories.forEach((category) => {



        let container = document.createElement("div");
        container.classList.add("categoryContainer", "flex", "flexColumn", "alignCenter");

        let categoryImgContainer = document.createElement("div");
        categoryImgContainer.classList.add("categoryImgContainer", "flex", "alignCenter");

        let img = document.createElement("img");
        img.classList.add("categoryImg");
        img.src = "../ASSETS/1.LOGOS/" + category.CategoryIMG;
        categoryImgContainer.append(img)

        let title = document.createElement("h2");
        title.classList.add("categoryTitle");
        title.innerHTML = category.CategoryName;

        let button = document.createElement("div");
        button.classList.add("categoryButton", "flex", "justifyCenter", "alignCenter");
        button.innerHTML = "Choose category";

        if (localStorage.getItem("choosenCategory") == category.ID) {

            button.style.backgroundColor = "green";

        }

        button.addEventListener("click", function(){

            if (localStorage.getItem("choosenCategory") == category.ID) {
                localStorage.removeItem("choosenCategory");
                button.style.backgroundColor = "grey";
            } else {    
                saveChoice(category.ID);
            }
        });


        container.append(categoryImgContainer, title, button);
        categoryContainer.append(container);


    });

}

function saveChoice(id) {

    localStorage.setItem("choosenCategory", id);

    renderCategories();

}

async function checkImages(image){
    let action = "checkImage";

    let body = new FormData();
    body.append("image", image);

    let response = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "POST", body);

    return response;
}

async function uploadImage(image) {
    let action = "uploadImage";

    let body = new FormData();
    body.append("image", image);

    let response = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "POST", body);

    return response;
}


document.getElementById("saveProduct").addEventListener("click", function(){
    newProduct();
});

/* document.getElementById("saveCategory").addEventListener("click", function(){
    console.log("test");
}); */


