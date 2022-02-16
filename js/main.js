
import { productCard } from '../components/productCard.js';

async function initSite(){
    
    
    getAllCategories();

}


export async function makeRequest(url, method, body) {
    try {
        let response = await fetch(url, {method, body});
        let result = await response.json();
        return result;
    } catch(err){
        console.error(err);
    }

}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

// Function for fetching all products from the database.
async function getAllProducts(){

    const action = "getAll";

    let allProducts = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "GET");
    console.log(allProducts[0].ProductName)
   
    
    delay(2000).then(() => console.log('ran after 1 second1 passed'));
    
    
    
    
    let x = window.matchMedia("(max-width: 1439px)")
    x.addListener(productCard)
    productCard(x)
}

// Function for fetching all products by categoryId.
async function getAllProductsByCategory(id){
    const action = "getAllById";

    let allProducts = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}&id=${id}`, "GET");
    console.log(allProducts);
}

// Function for fetching all categories from the database.
async function getAllCategories(){

    const action = "getAll";

    let allCategories = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}`, "GET");
    console.log(allCategories);

}

// Function for fetching one category by Id from the database.
async function getCategoryById(id){

    const action = "getById";

    let category = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}&id=${id}`, "GET");
    console.log(category);

}




window.addEventListener("load", initSite);