import { getAllProductsByCategory } from '../js/main.js';
import { getAllCategories } from '../js/main.js';
import { makeRequest } from '../js/main.js';

let form = document.getElementById("changeCategory")
let categoryList = document.getElementById("adminCategoryDatalist")
let addCategoryBtn = document.getElementById("addBtn") 
let changeCategoryBtn = document.getElementById("changeBtn")
let productList = document.getElementById("adminProductDatalist")
let removeAdd = document.getElementById("removeAdd")
let removeChange = document.getElementById("removeChange")

category()


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
    
    let renderAllCategories = await getAllCategories()   
    let getDiv = document.getElementById("changeDiv")
    let changeCategoryDatalist = document.getElementById("changeCategoryDatalist")
    let option = document.createElement("option")
    option.disabled = true
    option.selected = true
    option.innerText = "Change a category!"

    changeCategoryDatalist.append(option)
    renderAllCategories.forEach(element => {   
        let categoryOption = document.createElement("option")
        categoryOption.classList.add("changeOption")
        categoryOption.innerHTML = element.CategoryName
        categoryOption.value = element.CategoryId
        changeCategoryDatalist.append(categoryOption)     
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
    let category = document.getElementById("adminCategoryDatalist")
    let product = document.getElementById("adminProductDatalist")
    let change = document.getElementById("changeCategoryDatalist")
    let add = document.getElementById("addCategoryDatalist")
    
    if(category.value === "" || isNaN(category.value)){
        document.getElementById("categoryDatalistReturn").innerText = "Pleas pick a Category"
        document.getElementById("productDatalistReturn").innerText = "Pleas pick a product"
        document.getElementById("noBTNReturn").innerText = "Please choose one or two of options"
    
        
    }else if(product.value === "" || isNaN(product.value)){
        document.getElementById("categoryDatalistReturn").innerText = ""
        document.getElementById("productDatalistReturn").innerText = "Pleas pick a product"
        document.getElementById("noBTNReturn").innerText = "Please choose one or two of options"
        console.log("1 Else IF")

    }else if (change.value === "" && add.value === "" ){
        console.log("2 Else IF")
        document.getElementById("productDatalistReturn").innerText = ""
        document.getElementById("noBTNReturn").innerText = "Please choose one or two of options"

    }else if (product.value && change.value && add.value){
        document.getElementById("productDatalistReturn").innerText = ""
        document.getElementById("noBTNReturn").innerText = ""
        console.log(" ProductId", product.value, "Old CategoryID", category.value, " ChangeId", change.value, " addId", add.value)
            
    }else if (product.value && change.value || product.value && add.value){
        document.getElementById("productDatalistReturn").innerText = ""
        document.getElementById("noBTNReturn").innerText = ""
        if(product.value && change.value){
            console.log(" ProductId", product.value,  "Old CategoryID", category.value, " ChangeId", change.value)
        }else if ( product.value && add.value){
            console.log(" ProductId", product.value, " addId", add.value)
        }
        
    }
    
});

async function databaseAddCategory(product,add){
    let list = []
    let action = "addCategory";
    let body = new FormData();
    list.push(product,add);
    body.append("changeOrAddCategory", JSON.stringify(list));
    let response = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "POST", body);
    
}
async function databaseChangeCategory(category,product,change){
    let list = []
    let action = "changeCategory";
    let body = new FormData();
    list.push(category,product,change);
    body.append("changeOrAddCategory", JSON.stringify(list));
    let response = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "POST", body);
    
}

async function databaseChangeAndAddCategory(category,product,change,add){
    let list = []
    let action = "changeAndAddCategory";
    let body = new FormData();
    list.push(category,product,change,add);
    body.append("changeOrAddCategory", JSON.stringify(list));
    let response = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "POST", body);
    
}