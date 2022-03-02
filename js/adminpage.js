import {makeRequest} from "./main.js";
import {renderCategories} from "./uploadProduct.js";
import {navbar} from '../components/navbar.js';


async function initSite(){
    navbar;
    getNewsletterSubsName()
    getNewsletterSubsEmail()
    renderCategories();
    getOrder();
    localStorage.clear();

}



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
    console.log(list);
    let action = "newNewsletter";
    let body = new FormData();
    body.append("newsletter", JSON.stringify(list));

    let response = await makeRequest(`../api/receivers/newsletterReceiver.php?action=${action}`, "POST", body);

    console.log(response);
    

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
    console.log(response);
    

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
    console.log(response);
    

}


async function getOrder(){ 

    let orderList = document.getElementById("orderList")
    let orderId = document.getElementById("orderId")
    let orderDate = document.getElementById("orderDate")
    let orderStatus = document.getElementById("orderStatus")

    let action = "getAllOrder";

    let response = await makeRequest(`../api/receivers/orderReciever.php?action=${action}`, "GET");
    console.log(response);
    for (let i = 0; i < response.length; i++) {
        let idOrder = document.createElement("p")
        let dateOrder = document.createElement("p")
        let statusOrder = document.createElement("p")
        idOrder.classList.add("order")
        dateOrder.classList.add("order")
        statusOrder.classList.add("order")
        idOrder.append(response[i].ID)
        dateOrder.append(response[i].DateCreated)
        statusOrder.append(response[i].OrderStatus)
        orderId.append(idOrder)
        orderDate.append(dateOrder)
        orderStatus.append(statusOrder)
        orderList.append(orderId, orderDate, orderStatus)

        if (response[i].OrderStatus === "orderPlaced") {
            let markAsComplete = document.createElement("button")
            markAsComplete.classList.add("button")
            markAsComplete.innerHTML = "Mark as complete"
            orderList.append(orderId, orderDate, orderStatus, markAsComplete)

        }
        
    }
    console.log(response);
    

}




document.getElementById("saveNews").addEventListener("click", function(){
    newNewsletter();
});




window.addEventListener("load", initSite);