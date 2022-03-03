import {makeRequest,getAllProducts,getAllCategories} from "./main.js";
import {renderCategories} from "./uploadProduct.js";
import {renderAllProducts} from "./removeProduct.js";
import {navbar} from '../components/navbar.js';

async function initSite(){
    navbar;
    getNewsletterSubsName()
    getNewsletterSubsEmail()
    renderCategories();
    getOrder();
    gettAllProductAdd()
    gettAllProductDel()
    localStorage.clear();
    renderAllProducts();
    getAdminRequests();
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
    addCategoryText.innerText = "" 
    //text 
    let name = document.createElement("h2")
    name.classList.add("categoryTitle")
    name.innerText = "Add a category that the product dont have"
    addCategoryText.append(name)
    //remove btn
    let submitBtn = document.createElement("button")
    submitBtn.classList.add("button", "flex", "justifyCenter", "alignCenter")
    submitBtn.id = "submitAddCategory"
    submitBtn.innerText = "Add Category"
    submitBtn.type = "reset"
    let btnContainer = document.getElementById("addCategoryBTN")
    btnContainer.append(submitBtn)
    //fetch
    let getAllCategory = await getAllCategories()
    let productCategory = await gettAllCategoryInProduct(id)
    //filter that show getAllCategory that is not = to productCategory
    let getCategory = getAllCategory.filter((getAllCategory) => !productCategory.find(productCategory => getAllCategory.ID === productCategory.CategoryId ))
    
    if(getCategory == "" || getCategory == []){
        name.innerText = "The product all ready have all categories!"
    }
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
                    
                    btnContainer.innerHTML = ""
                    name.innerText = "success to Add!"
                }
            }
            
    })
    
    
}
//------------------DEL CATEGORY-----------------------------------------



async function deleteCategory(id){
    
    deleteCategorys.innerHTML = ""
    deleteCategoryText.innerHTML = ""
    //name
    let name = document.createElement("h2")
    name.classList.add("categoryTitle")
    name.innerText = "Chose category/categories that you want to delete"
    deleteCategoryText.append(name)
    //btn
    let submitBtn = document.createElement("button")
    submitBtn.classList.add("button", "flex", "justifyCenter", "alignCenter")
    submitBtn.id = "submitDeleteCategory"
    submitBtn.innerText = "Delete Category"
    submitBtn.type = "reset"
    let btnContainer = document.getElementById("delCategoryBTN")
    btnContainer.append(submitBtn)

     let getCategory = await gettAllCategoryInProduct(id)
     if(getCategory == "" || getCategory == []){
         name.innerText = "The product dont have any categories!" 
    }
 
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
                        
                        btnContainer.innerHTML = ""
                        name.innerText = "success to remove!"
                    }
                }
        })
        
        
}

//--------------------ACCEPT ADMIN REQUEST---------------------------------



async function getAdminRequests() {
    const action = "getAdminRequests";
    let method = "GET"

    let result = await makeRequest(`../api/receivers/adminRequestReceiver.php?action=${action}`, method, undefined)

    renderAdminRequests(result)
    

}

async function renderAdminRequests(userObj){
    let parentDiv = document.getElementById("container")
    parentDiv.classList.add("class", "parentDiv")

    userObj.forEach(user => {
        let userContainer = document.createElement("div")
        userContainer.classList.add("class", "userContainer")
        let userEmail = document.createElement("li")
        let approveBtn = document.createElement("button")
        approveBtn.classList.add("button")

        
        userEmail.innerText = `User email: ${user.UserEmail}`
        approveBtn.innerText = "Accept request"

        userContainer.append(userEmail, approveBtn)
        parentDiv.append(userContainer)

        approveBtn.addEventListener("click", () =>{
              acceptAdminRequest(user)
              approveBtn.innerText = "Accept request ✔️"
              userEmail.style.color = "green"
              userEmail.innerText = `User email: ${user.UserEmail} ✔️`
            

          })
    });

}

async function acceptAdminRequest(user){

    const action = "acceptAdminRequest";
    let method = "POST"
    let body = new FormData()
    body.set("userID", JSON.stringify(user.ID))

    let result = await makeRequest(`../api/receivers/adminRequestReceiver.php?action=${action}`, method, body)
    console.log(result)
}



//------------EventListener---------------

optionProductList.addEventListener('change', () => {
    let btnContainer = document.getElementById("addCategoryBTN")
    btnContainer.innerHTML = ""
    addNewCategory(dataProductList.value)
  });

optionDelList.addEventListener('change', () => {
    let btnContainer = document.getElementById("delCategoryBTN")
    btnContainer.innerHTML = ""
    deleteCategory(dataRemoveCategoryList.value)
});


//----------------- NEWSLETTER SECTION --------------------------------------------


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


async function getOrder(){ 

    let orderList = document.getElementById("orderList")
    

    let action = "getAllOrder";

    let response = await makeRequest(`../api/receivers/orderReciever.php?action=${action}`, "GET");
    console.log(response);
    for (let i = 0; i < response.length; i++) {
        let orderId = document.createElement("div")
        let orderDate = document.createElement("div")
        let orderStatus = document.createElement("div")
        let markAsSentBtns = document.createElement("div")
        let idOrder = document.createElement("p")
        let dateOrder = document.createElement("p")
        let statusOrder = document.createElement("p")
        let markAsComplete = document.createElement("button")
        let singleOrder = document.createElement("div")
        singleOrder.classList.add("singleOrder")
        orderId.classList.add("orderId")
        orderDate.classList.add("orderDate")
        orderStatus.classList.add("orderStatus")
        markAsSentBtns.classList.add("markAsSentBtns")
        idOrder.classList.add("order")
        dateOrder.classList.add("order")
        statusOrder.classList.add("order")
        markAsComplete.classList.add("button")
        idOrder.append(response[i].ID)
        dateOrder.append(response[i].DateCreated)
        statusOrder.append(response[i].OrderStatus)
        orderId.append(idOrder)
        orderDate.append(dateOrder)
        orderStatus.append(statusOrder)
        markAsSentBtns.append(markAsComplete)
        singleOrder.append(orderId, orderDate, orderStatus, markAsSentBtns)
        orderList.append(singleOrder)

        if (response[i].OrderStatus === "Order Placed") {
            
            markAsComplete.innerHTML = "Mark as sent"


            markAsComplete.addEventListener("click", function(){
                orderSent(response[i])
                
                location.reload("1000")
            })
        }

        if (response[i].OrderStatus === "Sent") {
            markAsComplete.innerHTML = "Sent!"
            markAsComplete.style.backgroundColor = "whitesmoke"
            
        }

        if (response[i].OrderStatus === "Received") {
            markAsComplete.innerHTML = "Received!"
            markAsComplete.style.backgroundColor = "green"
            
        }


    
        
    }
    console.log(response);
    

}


async function orderSent(response){

    console.log(response.ID)
    const action = "sendOrderSent";
    let method = "POST"
    let body = new FormData()
    body.set("orderID", JSON.stringify(response.ID))

    let result = await makeRequest(`../api/receivers/orderReciever.php?action=${action}`, method, body)

    console.log(result)
}







document.getElementById("saveNews").addEventListener("click", function(){
    newNewsletter();
});




window.addEventListener("load", initSite);