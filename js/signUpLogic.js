let errorMsg = document.getElementById("errorMsg")
let signUpForm = document.getElementById("signUpForm")

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault(e);
    addNewUser();     
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


async function addNewUser() {

    let url = "../api/receivers/userReceiver.php"
    let method = 'POST'
    let body = new FormData(signUpForm);
    let plainFormData = Object.fromEntries(body.entries());
    let user = JSON.stringify(plainFormData)
    body.set('user', user);
    
    let result = await makeRequest(url, method, body)

    if(result == true) {
        errorMsg.innerText = "This User already exists, choose another Email!"
        errorMsg.style.color = "red";
    } else {
        errorMsg.innerText = "New user created, please log in below"
    }

}