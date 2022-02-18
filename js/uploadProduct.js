
import {makeRequest} from "./main.js";


async function newProduct(){

    let list = []

    let productInformation = {};
    productInformation.name = document.getElementById("productName").value;
    productInformation.description = document.getElementById("productDescription").value;
    productInformation.price = document.getElementById("productPrice").value;


    let sizes = [];
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

    sizes.push(size40, size41, size42, size43, size44, size45, size46);

    

    let images = {};
    images.imageOne = {
        "src" : document.getElementById("imageOne").files[0],
        "imgType": 1,
    }
    images.imageTwo = {
        "src" : document.getElementById("imageTwo").files[0],
        "imgType": 2,
    }
    images.imageThree = {
        "src" : document.getElementById("imageThree").files[0],
        "imgType": 3,
    }
    
    list.push(productInformation, sizes, images)
   
    if(list[0].name == "" || list[0].name == null || list[0].description == "" || list[0].description == null || list[0].price == "" || list[0].price == null) {
        document.getElementById("productInformationReturn").innerHTML= "Please fill out all the fields.";
    }
    else if(list[1].size40 === "" || list[1].size40 === null || list[1].size41 === "" || list[1].size41 === null || list[1].size42 === "" || list[1].size42 === null || list[1].size43 === "" || list[1].size43 === null || list[1].size44 === "" || list[1].size44 === null || list[1].size45 === "" || list[1].size45 === null || list[1].size46 === "" || list[1].size46 === null) {
        document.getElementById("sizeInformationReturn").innerHTML= "Please fill out all the fields.";
        document.getElementById("productInformationReturn").innerHTML= "";
    }
    else if(list[2].imageOne.src === undefined || list[2].imageTwo.src === undefined || list[2].imageThree.src === undefined) {
        document.getElementById("productInformationReturn").innerHTML= "";
        document.getElementById("sizeInformationReturn").innerHTML= "";
        document.getElementById("imageInformationReturn").innerHTML= "Please upload three images.";
    }
    else {

        
        
        document.getElementById("imageInformationReturn").innerHTML= "";
        document.getElementById("sizeInformationReturn").innerHTML= "";

        /* productResponse.style.display = "block";
        setTimeout(function(){ location.reload(); }, 2500); */
        let action = "newProduct";
        let body = new FormData();
        body.append("product", JSON.stringify(list));
        
        let response = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "POST", body);
        
        console.log(size40);
    }
    

}

document.getElementById("saveProduct").addEventListener("click", function(){
    newProduct();
});

