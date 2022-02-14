
import { productCard } from '../components/productCard.js';

async function initSite(){
    
    
    getAllProducts();
}


async function makeRequest(url, method, body) {
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
async function getAllProducts(){

    const action = "getAll";

    let allProducts = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "GET");
    console.log(allProducts[0].ProductName)
   
    
    delay(2000).then(() => console.log('ran after 1 second1 passed'));
    
    
    
    
    let x = window.matchMedia("(max-width: 1439px)")
    x.addListener(productCard)
    productCard(x)
}




window.addEventListener("load", initSite);
