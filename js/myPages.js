import {navbar} from '../components/navbar.js'
import { makeRequest } from '../js/main.js';
import {checkIsNormalUser} from '../components/navbar.js'
import {checkUserIsAdmin} from '../components/navbar.js'




async function initSite(){


let UserLoggedInObject;

let resultAdmin = await checkUserIsAdmin();
let resultUser = await checkIsNormalUser();

if(resultAdmin != false){
    
    UserLoggedInObject = await checkUserIsAdmin();
}
 
if(resultUser != false) {
    UserLoggedInObject = await checkIsNormalUser(); 
}
    divRenderer(UserLoggedInObject);
    navbar;

    if(localStorage.getItem("button") !== null){
        btnAdmin.style.display = "none"
        adminMsg.style.display = "flex"
     }


}



let btnAdmin = document.createElement('button')
let adminMsg = document.createElement('p')
let orderMsg = document.getElementById("orderMsg")



 async function divRenderer(UserLoggedInObject) {
    
    const divCon = document.getElementById("container"),
        productCardContainer = document.createElement('div'),
        pageBtnContainer = document.createElement('div')
  
        pageBtnContainer.setAttribute('id', 'pageBtnContainer')
        btnAdmin.setAttribute("class", "adminBtn")
        adminMsg.setAttribute("class", "adminMsg")

       
        
        let orders = await getOrders(UserLoggedInObject)

        if(orders.length < 1){
            orderMsg.innerText = "You have not made any orders yet!"
        }

        if(UserLoggedInObject[0].UserIsAdmin == 1 && orders.length < 1){
            productCardContainer.style.display = "none"; 
        }
        console.log(orders);
       
    
    for(let i = 0; i < orders.length; i++) {
        
        const receivedBtn = document.createElement('button'),
            parentProductCard = document.createElement('div'),
            orderNr = document.createElement('h4'),
            orderStatus = document.createElement('h4'),
            parentProductCardText = document.createElement('div'),
            parentReceivedBtn = document.createElement('div'),
            productCard = document.createElement('div'),
            totalSum = document.createElement('h5'),
            notSentResponse = document.createElement("p"),
            totalSumContainer = document.createElement("div"),
            orderDate = document.createElement("h4")



            if(orders[i].OrderStatus == "Sent"){
                receivedBtn.addEventListener("click", () =>{
                sendOrderReceived(orders[i]);
                location.reload();
                })
        
            } 
            
            if (orders[i].OrderStatus == "Placed"){
                receivedBtn.addEventListener("click", () =>{
                    notSentResponse.classList.add("notSentResponse")
                    parentReceivedBtn.append(notSentResponse)
                    notSentResponse.innerText = "This order is not sent !"
                    notSentResponse.style.color = "red"

                })
            } 
            

            if (orders[i].OrderStatus == "Received"){
                receivedBtn.addEventListener("click", () =>{
                    notSentResponse.classList.add("notSentResponse")
                    parentReceivedBtn.append(notSentResponse)
                    notSentResponse.innerText = "This order is already received!"
                    notSentResponse.style.color = "green"
                })
            }
        
        totalSumContainer.setAttribute('class', 'totalSum')
        orderDate.setAttribute("class", "orderdateText")
        productCard.setAttribute('class', 'productCard')
        parentProductCardText.setAttribute('class', 'parentProductCardText')
        parentReceivedBtn.setAttribute('class', 'parentReceivedBtn')
        orderStatus.setAttribute('class', 'orderStatusText')
        orderNr.setAttribute('class', 'orderNrText')
        receivedBtn.setAttribute("id", "receivedBtn")

        
        if(orders[i].OrderStatus == "Received"){
            receivedBtn.innerText = `${orders[i].OrderStatus}✔️ `
            orderStatus.style.color = "green"

        }else {
            receivedBtn.innerText =`I received my order 👍`
        }
        orderDate.innerText = `Order date: ${orders[i].DateCreated}`
        totalSum.innerText = `Total Price: ${orders[i].TotalPrice}$`     
        orderNr.innerText = `Order number: ${orders[i].ID}` 
        orderStatus.innerText = `Order status: ${orders[i].OrderStatus}`
        



        parentReceivedBtn.appendChild(receivedBtn)
        parentProductCardText.appendChild(orderNr)
        parentProductCardText.appendChild(orderStatus)
        parentProductCard.appendChild(parentProductCardText)
        productCard.appendChild(parentReceivedBtn)
        parentProductCard.appendChild(productCard)
        productCardContainer.appendChild(parentProductCard).setAttribute("class", "parentProductCard")
        totalSumContainer.append(orderDate, totalSum)
        parentProductCard.append(totalSumContainer)

       


    
    }
    

    divCon.appendChild(productCardContainer).setAttribute("class", "productCardContainer")

    productCardContainer.appendChild(pageBtnContainer)    
    pageBtnContainer.append(btnAdmin,adminMsg)
    
    btnAdmin.innerText = "Request to be ADMIN😎"
    adminMsg.innerText = "Admin request pending...😴"

    btnAdmin.addEventListener("click", () =>{
        sendAdminRequest(UserLoggedInObject)
        
    })
    
    if(UserLoggedInObject[0].AdminRequest == 1){
        btnAdmin.style.display = "none"
        adminMsg.style.display = "flex"
    }

    if(UserLoggedInObject[0].UserIsAdmin == 1){
        btnAdmin.style.display = "none"
        adminMsg.style.display = "none"
    }
    
    
}

// FUNCTIONS

async function getOrders(UserLoggedInObject){
    const action = "getOrders";
    let method = "POST"
    let userID = UserLoggedInObject[0].ID
    let body = new FormData()
    body.set("userID", JSON.stringify(userID))

    let result = await makeRequest(`../api/receivers/orderReciever.php?action=${action}`, method, body)

    return result;
}

async function sendOrderReceived(orders){

    console.log(orders.ID)
    const action = "sendOrderReceived";
    let method = "POST"
    let body = new FormData()
    body.set("orderID", JSON.stringify(orders.ID))

    let result = await makeRequest(`../api/receivers/orderReciever.php?action=${action}`, method, body)

    console.log(result)
}



async function sendAdminRequest(UserLoggedInObject){
    let url  = "../api/receivers/adminRequestReceiver.php"
    let method = "POST"
    let adminValue = 1;
    let userObj = UserLoggedInObject[0]
    let requestObj = {
        ID: userObj.ID,
        AdminRequest: adminValue
    }
    let body = new FormData()
    body.set('adminRequest', JSON.stringify(requestObj))

    let result = await makeRequest(url, method, body)
    
    if(result == true){
    localStorage.setItem("button", "clicked")
    btnAdmin.style.display = "none"
    adminMsg.style.display = "flex"
    

    console.log(result);
    }
    

}





window.addEventListener("load", initSite);