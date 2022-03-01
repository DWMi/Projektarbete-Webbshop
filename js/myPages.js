import {navbar} from '../components/navbar.js'
import {checkIsNormalUser} from '../components/navbar.js'
/* import {checkUserIsAdmin} from '../components/navbar.js'
 */import { makeRequest } from '../js/main.js';




function initSite(){
    divRenderer();
    navbar;

    if(localStorage.getItem("button") !== null){
        btnAdmin.style.display = "none"
        adminMsg.style.display = "flex"
     }


}



let btnAdmin = document.createElement('button')
let adminMsg = document.createElement('p')

btnAdmin.addEventListener("click", sendAdminRequest)


   async function divRenderer() {
    
    const divCon = document.getElementById("container"),
        productCardContainer = document.createElement('div'),
        pageBtnContainer = document.createElement('div')
  
        pageBtnContainer.setAttribute('id', 'pageBtnContainer')
        btnAdmin.setAttribute("class", "adminBtn")
        adminMsg.setAttribute("class", "adminMsg")

        let orders = await getOrders()

        console.log(orders)

       
    
    for(let i = 0; i < orders.length; i++) {
        
        const receivedBtn = document.createElement('button'),
            parentProductCard = document.createElement('div'),
            orderNr = document.createElement('h4'),
            orderStatus = document.createElement('h4'),
            parentProductCardText = document.createElement('div'),
            parentReceivedBtn = document.createElement('div'),
            productCard = document.createElement('div'),
            totalSum = document.createElement('h5')

            receivedBtn.addEventListener("click", () =>{
                console.log(receivedBtn)
            })

        
        totalSum.setAttribute('class', 'totalSum')
        productCard.setAttribute('class', 'productCard')
        parentProductCardText.setAttribute('class', 'parentProductCardText')
        parentReceivedBtn.setAttribute('class', 'parentReceivedBtn')
        orderStatus.setAttribute('class', 'orderStatusText')
        orderNr.setAttribute('class', 'orderNrText')
        receivedBtn.setAttribute("id", "receivedBtn")
       
        
        receivedBtn.innerText =`Received✔️`
        totalSum.innerText = `Order date: ${orders[i].DateCreated}`     
        orderNr.innerText = `Order number: ${orders[i].ID}` 
        orderStatus.innerText = `Order Status: ${orders[i].OrderStatus}`

        


        divCon.appendChild(productCardContainer).setAttribute("class", "productCardContainer")
        parentReceivedBtn.appendChild(receivedBtn)
        parentProductCardText.appendChild(orderNr)
        parentProductCardText.appendChild(orderStatus)
        parentProductCard.appendChild(parentProductCardText)
        productCard.appendChild(parentReceivedBtn)
        parentProductCard.appendChild(productCard)
        productCardContainer.appendChild(parentProductCard).setAttribute("class", "parentProductCard")
        parentProductCard.append(totalSum)


    
    }


    

  
    productCardContainer.appendChild(pageBtnContainer)    
    pageBtnContainer.append(btnAdmin,adminMsg)
    
    btnAdmin.innerText = "Request to be ADMIN😎"
    adminMsg.innerText = "Admin request pending..."
    
    if(UserLoggedInObject[0].AdminRequest == 1){
        btnAdmin.style.display = "none";
        adminMsg.style.display = "flex"
    }
    
    
}




async function getOrders(){
    const action = "getOrders";
    let method = "POST"
    let userID = UserLoggedInObject[0].ID
    let body = new FormData()
    body.set("userID", JSON.stringify(userID))

    let result = await makeRequest(`../api/receivers/orderReceiver.php?action=${action}`, method, body)

    return result;
}


async function sendAdminRequest(){
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

/* function showMsg(){
    adminMsg.style.display = "flex" 
}

function hideBtn(){
    btnAdmin.style.display = "none" 
} */


window.addEventListener("load", initSite);


let UserLoggedInObject = await checkIsNormalUser();

console.log(UserLoggedInObject);





