
import {makeRequest} from "./main.js";


function initSite(){

}

// Måste kolla så att all information finns innan man laddar upp produkterna. 


// tar in informationen om produkten


// tar in information om sizes


// tar in information om bilderna. 



async function newProduct(){

    let list = []

    let productInformation = {};
    productInformation.name = document.getElementById("productName").value;
    productInformation.description = document.getElementById("productDescription").value;
    productInformation.price = document.getElementById("productPrice").value;

    let sizes = {};
    sizes.size40 = document.getElementById("40").value;
    sizes.size41 = document.getElementById("41").value;
    sizes.size42 = document.getElementById("42").value;
    sizes.size43 = document.getElementById("43").value;
    sizes.size44 = document.getElementById("44").value;
    sizes.size45 = document.getElementById("45").value;
    sizes.size46 = document.getElementById("46").value;

    let images = {};
    images.imageOne = document.getElementById("imageOne").files[0].name;
    images.imageTwo = document.getElementById("imageTwo").files[0].name;
    images.imageThree = document.getElementById("imageThree").files[0].name;

    list.push(productInformation, sizes, images)

    // if(list[0].name == "" || list[0].name == null || list[0].description == "" || list[0].description == null || list[0].price == "" || list[0].price == null) {
    //     document.getElementById("productInformationReturn").innerHTML= "Please fill out all the fields.";
    // }
    // else if(list[1].size40 == "" || list[1].size40 == null || list[1].size41 == "" || list[1].size41 == null || list[1].size42 == "" || list[1].size42 == null || list[1].size43 == "" || list[1].size43 == null || list[1].size44 == "" || list[1].size44 == null || list[1].size45 == "" || list[1].size45 == null || list[1].size46 == "" || list[1].size46 == null) {
    //     document.getElementById("sizeInformationReturn").innerHTML= "Please fill out all the fields.";
    //     document.getElementById("productInformationReturn").innerHTML= "";
    // }
    // else if(list[2].imageOne.length < 1 || list[2].imageTwo.length < 1 || list[2].imageThree.length < 1) {
    //     document.getElementById("productInformationReturn").innerHTML= "";
    //     document.getElementById("sizeInformationReturn").innerHTML= "";
    //     document.getElementById("imageInformationReturn").innerHTML= "Please upload three images.";
    // }
    // else {
    //     document.getElementById("imageInformationReturn").innerHTML= "";
    // }

    console.log(list);
    //let action = "newProduct";
    let body = new FormData();
    body.append("product", JSON.stringify(list));

    let response = await makeRequest(`../api/receivers/productReceiver.php`, "POST", body);

    console.log(response);

}





async function uploadImage() {
    try {
        let input = document.getElementsByTagName("input")[0]
        let file = input.files[0]
    
        let body = new FormData()
        body.append("image", file)
    
        let response = await fetch("./API/requestHandler.php", {
            method: "POST",
            body
        })
    
        let result = await response.json()
    
        console.log(result)
    } catch(err) {
        console.error(err)
    }
}


document.getElementById("saveProduct").addEventListener("click", function(){
    newProduct();
});


window.addEventListener("load", initSite());