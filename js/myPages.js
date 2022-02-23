import {navbar} from '../components/navbar.js'

function initSite(){
    divRenderer();
    navbar;

}

const divRenderer = () => {
    
    const divCon = document.getElementById("container"),
        productCardContainer = document.createElement('div'),
        btnAdmin = document.createElement('button'),
        pageBtnContainer = document.createElement('div')
  
        pageBtnContainer.setAttribute('id', 'pageBtnContainer')
        btnAdmin.setAttribute("class", "adminBtn")
    
    
    
    
    
    for(let i = 0; i < 3; i++) {
        
        const receivedBtn = document.createElement('button'),
            parentProductCard = document.createElement('div'),
            orderNr = document.createElement('h4'),
            orderStatus = document.createElement('h4'),
            parentProductCardText = document.createElement('div'),
            parentReceivedBtn = document.createElement('div'),
            productCard = document.createElement('div'),
            totalSum = document.createElement('h5')

        
        totalSum.setAttribute('class', 'totalSum')
        productCard.setAttribute('class', 'productCard')
        parentProductCardText.setAttribute('class', 'parentProductCardText')
        parentReceivedBtn.setAttribute('class', 'parentReceivedBtn')
        orderStatus.setAttribute('class', 'orderStatusText')
        orderNr.setAttribute('class', 'orderNrText')
        receivedBtn.setAttribute("id", "receivedBtn")
       
        
        receivedBtn.innerText =`Received✔️`
        totalSum.innerText = `Total $__`     
        orderNr.innerText = `Order#___`
        orderStatus.innerText = `Order Status:__`


        divCon.appendChild(productCardContainer).setAttribute("class", "productCardContainer")
        parentReceivedBtn.appendChild(receivedBtn)
        parentProductCardText.appendChild(orderNr)
        parentProductCardText.appendChild(orderStatus)
        parentProductCard.appendChild(parentProductCardText)
        productCard.appendChild(parentReceivedBtn)
        parentProductCard.appendChild(productCard)
        productCardContainer.appendChild(parentProductCard).setAttribute("class", "parentProductCard")
        parentProductCard.appendChild(totalSum)
    }
    
    productCardContainer.appendChild(pageBtnContainer)    
    pageBtnContainer.appendChild(btnAdmin)
    
    btnAdmin.innerText = "Request to be ADMIN😎"
    
    btnAdmin.addEventListener("onclick",sendAdminRequest())


    
    
    document.getElementById('receivedBtn').addEventListener("onclick",sendReceivedOrder())       
}

const sendReceivedOrder = () => {
    
}

const sendAdminRequest = () => {
    


}

async function makeRequest(url, method, body) {
    try {
        let response = await fetch(url, {
            method,
            body
        })
        let result = await response.json();
        return result
    }   catch(err) {
        console.error(err)
    }
} 




window.addEventListener("load", initSite);