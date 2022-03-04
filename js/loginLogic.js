import {navbar} from '../components/navbar.js'



function initSite(){
    navbar;

}

let errorMsg = document.getElementById("errorMsg");
let logInForm = document.getElementById("logInForm")

logInForm.addEventListener("submit", (e) => {
    e.preventDefault(e);
    logInUser();
    
});


async function makeRequest(url, method, body) {
    try {
        let response = await fetch(url, {
        method,
        body: body
    })
        let result = await response.json();
        return result;
    } catch(err){
        console.error(err);
    }

}




async function logInUser(){

    let url = "../api/receivers/userReceiver.php"
    let method = 'POST'
    let body = new FormData(logInForm);
    let plainFormData = Object.fromEntries(body.entries());
    let user = JSON.stringify(plainFormData)
    body.set('userLogIn', user);
    
    let result = await makeRequest(url, method, body)

    if(result == true){
        window.location.href = "index.html"
    } else {
        errorMsg.innerText = "Invalid Email or Password!"
        errorMsg.style.color = "red";
    }
    

}

window.addEventListener("load", initSite)


