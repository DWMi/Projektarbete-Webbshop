import { getAllProductsByCategory } from '../js/main.js';
import { makeRequest,getCategoryById,getAllCategories  } from '../js/main.js';



let categoryList = document.getElementById("adminCategoryDatalist")
let addCategoryBtn = document.getElementById("addBtn") 
let changeCategoryBtn = document.getElementById("changeBtn")
let productList = document.getElementById("adminProductDatalist")
let removeAdd = document.getElementById("removeAdd")
let removeChange = document.getElementById("removeChange")

category()

// Function to gett all productInCategory.
async function getAllProductsInCategory(){

    const action = "getAllProductsInCategory";

    let productsIncategory = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}`, "GET");
   

    return productsIncategory;

}

getAllProductsInCategory()


async function category(){
    let renderAllCategories = await getAllCategories()
   
    renderAllCategories.forEach(element => {
        let categoryOption = document.createElement("option")
        categoryOption.innerHTML = element.CategoryName
        categoryOption.value = element.CategoryId
        categoryList.append(categoryOption)
    });

}



async function product(id,event){
    event.preventDefault()
    productList.innerHTML = ""
    let renderAllProductByCategories = await getAllProductsByCategory(id)
    let option = document.createElement("option")
    option.disabled = true
    option.selected = true
    option.innerText = "Chose a product from the category above!"

    productList.append(option)

    renderAllProductByCategories.forEach(element => {
        let productOption = document.createElement("option")
        productOption.innerHTML = element.ProductName
        productOption.value = element.ProductId
        productList.append(productOption) 
    }); 
}



async function changeCategory(){
    let test = await getAllProductsInCategory() 

    let renderAllCategories = await getAllCategories()

    /* let intersection = renderAllCategories.filter(x => arr2.includes(x))
    let allCategories = array(1,2,3);
    let productCategories = array(1,2);
 */
   
    let getDiv = document.getElementById("changeDiv")
    let changeCategoryDatalist = document.getElementById("changeCategoryDatalist")
    let option = document.createElement("option")
    option.disabled = true
    option.selected = true
    option.value = ""
    option.innerText = "Change a category!"
  
    changeCategoryDatalist.append(option)
  
    renderAllCategories.forEach(element => {  
        let list = []
        console.log(element)
        test.forEach(x => {
            
            if(x.CategoryId == element.CategoryId && x.ProductId == productList.value ){
                console.log(element.CategoryId ==! renderAllCategories)
                if(element.CategoryId ==! renderAllCategories){
                    console.log(element.CategoryId, "HEEEEEEEEJ!")
                }
                
                list.push(element.CategoryId)
                console.log(list)
                
                let categoryOption = document.createElement("option")
                categoryOption.classList.add("changeOption")
                categoryOption.innerHTML = element.CategoryName
                categoryOption.value = element.CategoryId 
                changeCategoryDatalist.append(categoryOption)     
            }else{
                
            }
        });
       
        
        
    
   
    });
    removeChange.addEventListener("click", function(){
        getDiv.style.display = "none";
        changeCategoryBtn.style.visibility = "visible";
        changeCategoryDatalist.innerHTML = ""
        changeCategoryDatalist.value = null    
    })
}



async function addCategory(){
    let renderAllCategories = await getAllCategories()
    
    let getDiv = document.getElementById("addDiv")
    let addCategoryDatalist = document.getElementById("addCategoryDatalist")
    let option = document.createElement("option")
    option.disabled = true
    option.selected = true
    option.value = ""
    option.innerText = "Add a category!"

    addCategoryDatalist.append(option)
    
    renderAllCategories.forEach(element => {

        let categoryOption = document.createElement("option")
        categoryOption.innerHTML = element.CategoryName
        categoryOption.value = element.CategoryId
        addCategoryDatalist.append(categoryOption)
        
    });

    removeAdd.addEventListener("click", function(){
        getDiv.style.display = "none";
        addCategoryBtn.style.visibility = "visible";
        addCategoryDatalist.innerHTML = ""
        addCategoryDatalist.value = null
    })
}
//--------------------------------EventListener for BTN ----------------------------------------


changeCategoryBtn.addEventListener("click", function() {
    let getDiv = document.getElementById("changeDiv")
    getDiv.style.display = "block";
    changeCategoryBtn.style.visibility = "hidden";
    changeCategory() 
});

addCategoryBtn.addEventListener("click", function() {
    let getDiv = document.getElementById("addDiv")
    getDiv.style.display = "block";
    addCategoryBtn.style.visibility = "hidden";
    addCategory()
});
//-------------------------------------------------------------------------------------------------

document.querySelector("#adminCategoryDatalist").addEventListener("change", function(event){
    product(adminCategoryDatalist.value,event)
});


document.querySelector("#submitCategoryChange").addEventListener("click", function(){
    logic()
    
});


async function logic(){
    let category = document.getElementById("adminCategoryDatalist")
    let product = document.getElementById("adminProductDatalist")
    let change = document.getElementById("changeCategoryDatalist")
    let add = document.getElementById("addCategoryDatalist")
    
    let listCategory = {"currentCategoryId": category.value}
    let listProduct = {"productId": product.value}
    let listChange = {"changeCategoryId": change.value}
    let listAdd = {"addCategoryId": add.value}

    if(category.value === "" || isNaN(category.value)){
        document.getElementById("categoryDatalistReturn").innerText = "Pleas pick a Category"
        document.getElementById("productDatalistReturn").innerText = "Pleas pick a product"
        document.getElementById("noBTNReturn").innerText = "Please choose one or two of options"
    
        
    }else if(product.value === "" || isNaN(product.value)){
        document.getElementById("categoryDatalistReturn").innerText = ""
        document.getElementById("productDatalistReturn").innerText = "Pleas pick a product"
        document.getElementById("noBTNReturn").innerText = "Please choose one or two of options"
        console.log("1 Else IF")

    }else if (change.value === "" && add.value === "" || isNaN(change.value) && isNaN(add.value)){
        console.log("2 Else IF")
        document.getElementById("productDatalistReturn").innerText = ""
        document.getElementById("noBTNReturn").innerText = "Please choose one or two of options"

    }else if (category.value && product.value && change.value && add.value){
        document.getElementById("productDatalistReturn").innerText = ""
        document.getElementById("noBTNReturn").innerText = ""

        if(category.value === change.value || add.value && change.value === add.value){
            console.log("category.value === change.value || add.value || change.value === add.value")
        }else{
            let list = []
            list.push(listProduct,listCategory,listAdd,listChange);
            databaseChangeCategory("changeAndAddCategory", list)

        }
            
    }else if (category.value && product.value && change.value || category.value && product.value && add.value){
        document.getElementById("productDatalistReturn").innerText = ""
        document.getElementById("noBTNReturn").innerText = ""

        if(category.value && product.value && change.value){
            if(category.value === change.value){
                console.log("The old category id is the same what you want to change")
                document.getElementById("noBTNReturn").innerText = "The old category id is the same what you want to change"
            }else{
                let list = []
                list.push(listProduct,listCategory,listChange);
                databaseChangeCategory("changeCategory", list)
                
            }
        
        }else if (category.value && product.value && add.value){
            if(category.value === add.value){
                console.log("The old category id is the same what you want to add")
                document.getElementById("noBTNReturn").innerText = "The old category id is the same what you want to add"

            }else{
                let list = []
                list.push(listProduct,listCategory,listAdd);
                databaseChangeCategory("addCategory", list)                
            }
        }
        
    }
    
}

async function databaseChangeCategory(action, list){
    console.log(list)
    console.log(action)
    let body = new FormData();
    body.append("changeOrAddCategory", JSON.stringify(list));
    let response = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}`, "POST", body);
    console.log(response)
}