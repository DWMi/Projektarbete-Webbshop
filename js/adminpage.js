import {makeRequest,getAllProducts,getAllCategories} from "./main.js";
import {renderCategories} from "./uploadProduct.js";
import {renderAllProducts} from "./removeProduct.js";
import {navbar} from '../components/navbar.js';

async function initSite(){
    navbar;
    getNewsletterSubsName()
    getNewsletterSubsEmail()
    renderCategories();
    gettAllProductAdd()
    gettAllProductDel()
    localStorage.clear();

    renderAllProducts();
}

//---------------------------

//value from product option
let optionProductList = document.getElementById("dataProductList")
let addNewCategorys = document.getElementById("addNewCategory")
let addCategoryText = document.getElementById("addCategoryText")
let deleteCategorys = document.getElementById("deleteCategory")
let deleteCategoryText = document.getElementById("deleteCategoryText")
let optionDelList = document.getElementById("dataRemoveCategoryList")



//--------------------- Receivers ------------------------------------------
async function addCategoryByProductId(productId,categoryId){
    let list = []
    list.push(productId, categoryId)
    let action = "addCategoryByProductId";
    let body = new FormData();
    body.append("addCategory", JSON.stringify(list));
    let res = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}`, "POST", body);
    return res
}
// get categorys by product id
async function gettAllCategoryInProduct(id){ 
    const action = "gettAllCategoryInProduct";
    let productsIncategory = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}&id=${id}`, "GET");
    return productsIncategory;
}

//remove one category from product
async function removeCategoryFromProduct(productId,categoryId){
    let action = "deleteCategoryByProductId";
    let res = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}&id=${productId}&categoryId=${categoryId}`, "DEL");
    return res
  
}

//-----------------------Get all products -------------------------------------
//get products to Add option
async function gettAllProductAdd(){
    let product = await getAllProducts()
    product.forEach(element => {
        let product = document.createElement("option")
        product.innerHTML = element.ProductName
        product.value = element.ProductId
        optionProductList.append(product) 
    });
}
//get products to Delete option
async function gettAllProductDel(){
    let product = await getAllProducts()
    product.forEach(element => {
        let product = document.createElement("option")
        product.innerHTML = element.ProductName
        product.value = element.ProductId
        optionDelList.append(product) 
    });
}
//--------------------ADD NEW CATEGORY---------------------------------


async function addNewCategory(id){
   
   addNewCategorys.innerHTML = ""
   addCategoryText.innerHTML = ""
   let name = document.createElement("h2")
   name.classList.add("categoryTitle")
   name.innerText = "Add a category that the product dont have"
   addCategoryText.append(name)
    
    let getAllCategory = await getAllCategories()
    let productCategory = await gettAllCategoryInProduct(id)
    
    let getCategory = getAllCategory.filter((getAllCategory) => !productCategory.find(productCategory => getAllCategory.ID === productCategory.CategoryId ))

    getCategory.forEach(element => {

        let container = document.createElement("div")
        container.classList.add("categoryContainer", "flex", "flexColumn", "alignCenter")
        let containerImg = document.createElement("div")
        containerImg.classList.add("categoryImgContainer", "flex", "alignCenter")
        let img = document.createElement("img")
        img.classList.add("categoryImg")
        let name = document.createElement("h2")
        name.classList.add("categoryTitle")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.name = "addCategory"
        checkbox.value = element.ID
        img.src = "./ASSETS/1.LOGOS/" + element.CategoryIMG
        name.innerText = element.CategoryName

        containerImg.append(img)
        container.append(containerImg,name,checkbox)
        addNewCategorys.append(container)


    });
    document.getElementById("submitAddCategory").addEventListener('click', function(){
        let checkboxes = document.getElementsByName("addCategory")
        
            for(var i = 0; i < checkboxes.length; i++){
                if(checkboxes[i].checked == true){
                    
                    console.log("Product ID:",optionProductList.value,"Category ID:",checkboxes[i].value)
                    addCategoryByProductId(optionProductList.value,checkboxes[i].value)
                }
            }
        
        })
    
    
}
//------------------DEL CATEGORY-----------------------------------------



async function deleteCategory(id){
    
    deleteCategorys.innerHTML = ""
    deleteCategoryText.innerHTML = ""
    let name = document.createElement("h2")
    name.classList.add("categoryTitle")
    name.innerText = "Chose category/categories that you want to delete"
    deleteCategoryText.append(name)
    
     let getCategory = await gettAllCategoryInProduct(id)
     
 
        getCategory.forEach(element => {
         
                let container = document.createElement("div")
                container.classList.add("categoryContainer", "flex", "flexColumn", "alignCenter")
                let containerImg = document.createElement("div")
                containerImg.classList.add("categoryImgContainer", "flex", "alignCenter")
                let img = document.createElement("img")
                img.classList.add("categoryImg")
                let name = document.createElement("h2")
                name.classList.add("categoryTitle")
                let checkbox = document.createElement("input")
                checkbox.type = "checkbox"
                checkbox.name = "delCategory"
                checkbox.value = element.CategoryId
                img.src = "./ASSETS/1.LOGOS/" + element.CategoryIMG
                name.innerText = element.CategoryName
    
                containerImg.append(img)
                container.append(containerImg,name,checkbox)
                deleteCategorys.append(container)
            
             
        });

        document.getElementById("submitDeleteCategory").addEventListener('click', function(){
        let checkboxes = document.getElementsByName("delCategory")
        
            for(var i = 0; i < checkboxes.length; i++){
                if(checkboxes[i].checked == true){
                    console.log("Product ID:",optionDelList.value,"Category ID:",checkboxes[i].value)
                    removeCategoryFromProduct(optionDelList.value,checkboxes[i].value)
                }
            }
        
        })
}




//------------EventListener-------------------------------------

optionProductList.addEventListener('change', () => {
    addNewCategory(dataProductList.value)
  });

optionDelList.addEventListener('change', () => {
    deleteCategory(dataRemoveCategoryList.value)
});


//----------------------------


async function newNewsletter(){

    let list = []

    let newsInformation = {};
    newsInformation.name = document.getElementById("newsTitle").value;
    newsInformation.description = document.getElementById("newsBody").value;
    let newsResponse = document.getElementById("newsResponse")

    

    list.push(newsInformation)
    if(list[0].name == "" || list[0].name == null || list[0].description == "" || list[0].description == null) {
        document.getElementById("newsletterInformationReturn").innerHTML= "Please fill out all the fields.";
    }
    else {
        newsResponse.style.display = "block"
        setTimeout(function(){ location.reload(); }, 2500);
    }
    
    let action = "newNewsletter";
    let body = new FormData();
    body.append("newsletter", JSON.stringify(list));

    let response = await makeRequest(`../api/receivers/newsletterReceiver.php?action=${action}`, "POST", body);

    
    

}

async function getNewsletterSubsName(){ 

    let subName = document.getElementById("subName")
    let emailList = document.getElementById("emailList")
    
    
    let action = "showNameSubs";

    let response = await makeRequest(`../api/receivers/newsletterReceiver.php?action=${action}`, "GET");
    for (let i = 0; i < response.length; i++) {
        let name = document.createElement("p")
        name.classList.add("name")
        name.append(response[i].Name)
        subName.append(name)
        emailList.append(subName)

        
    }
    
    

}


async function getNewsletterSubsEmail(){ 

    let subEmail = document.getElementById("subEmail")
    let emailList = document.getElementById("emailList")


    
    
    let action = "showEmailSubs";

    let response = await makeRequest(`../api/receivers/newsletterReceiver.php?action=${action}`, "GET");
    for (let i = 0; i < response.length; i++) {
        let email = document.createElement("p")
        email.classList.add("email")
        email.append(response[i].Email)
        subEmail.append(email)
        emailList.append(subEmail)
        
    }
    
    

}




document.getElementById("saveNews").addEventListener("click", function(){
    newNewsletter();
});




window.addEventListener("load", initSite);