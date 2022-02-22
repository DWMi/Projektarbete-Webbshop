import {navbar} from '../components/navbar.js'

let userName = document.getElementById("name");
let logOutBtn = document.getElementById("logOutBtn");
let logInBtn = document.getElementById("logInBtn")

logInBtn.addEventListener("click", goToLogin)
logOutBtn.addEventListener("click", logOutUser);


async function initSite(){
    navbar;
    checkUserIsAdmin()
    checkIsNormalUser()

}




export async function makeRequest(url, method, body) {
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

function goToLogin(){
    window.location.href = "login.html"
}

async function logOutUser(){
    let url = "../api/controllers/logOutUser.php"
    let method = 'DELETE'

    let result = await makeRequest(url, method, undefined)

    if(result == true){
        window.location.href = "index.html"
    } 
}


// CHECK WHAT KIND OF USER IS LOGGED IN
async function checkUserIsAdmin() {
    let url = "../api/controllers/authAdmin.php"
    let method = 'GET'

    let result = await makeRequest(url, method, undefined)
    let user = result[0];

    if(result == false){
        console.log(false);
    } else {
         userName.innerText = `${user.UserFirstName} ${user.UserLastName} (ADMIN)`
         logInBtn.style.display = "none";
         logOutBtn.style.display = "flex";
         console.log(true);
        
    }


}

async function checkIsNormalUser() {
    let url = "../api/controllers/authUser.php"
    let method = 'GET'

    let result = await makeRequest(url, method, undefined)
    let user = result[0];
    

    if(result == false){
        console.log(false);
    } else {
        userName.innerText = `${user.UserFirstName} ${user.UserLastName} (NormalUser)`
        logInBtn.style.display = "none";
        logOutBtn.style.display = "flex";
    }

    
}



// Function for fetching all products from the database.
async function getAllProducts(){

    const action = "getAll";

    let allProducts = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "GET");
    
   
  
}

export async function getProductById(id) {

    const action = "getById";

    let product = await makeRequest(`../api/receivers/productReceiver.php?action=${action}&id=${id}`, "GET");

    return product;

}

// Function for fetching all products by categoryId.
export async function getAllProductsByCategory(id){
    const action = "getAllById";

    
    let allProductsFromCategory = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}&id=${id}`, "GET");
    
    return allProductsFromCategory

}

// Function for fetching all categories from the database.
export  async function getAllCategories(){

    const action = "getAll";

    let allCategories = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}`, "GET");
   
    return allCategories;
    
    
}

// Function for fetching one category by Id from the database.
export async function getCategoryById(id){

    const action = "getById";

    let category = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}&id=${id}`, "GET");
    
    return category;
}





window.addEventListener("load", initSite)
