
import { makeRequest,getAllProducts,getAllCategories  } from '../js/main.js';
//value from product option
let optionProductList = document.getElementById("dataProductList")
let addNewCategorys = document.getElementById("addNewCategory")
let addCategoryText = document.getElementById("addCategoryText")
let deleteCategorys = document.getElementById("deleteCategory")
let deleteCategoryText = document.getElementById("deleteCategoryText")
let optionDelList = document.getElementById("dataRemoveCategoryList")


async function initSite(){
    gettAllProductAdd()
    gettAllProductDel()
}
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

    let getCategory = getAllCategory.filter((getAllCategory) => !productCategory.find(productCategory => getAllCategory.CategoryId === productCategory.CategoryId ))

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
        checkbox.value = element.CategoryId
        img.src = "./ASSETS/1.LOGOS/" + element.CategoryImg
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
         
            if( element.CategoryId ){
  
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
            }
             
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

window.addEventListener("load", initSite);