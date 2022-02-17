


async function initSite(){
    
  
    getAllProducts();

    getAllProductsByCategory("1");

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



// Function for fetching all products from the database.
async function getAllProducts(){

    const action = "getAll";

    let allProducts = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "GET");
    
   
  
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
async function getCategoryById(id){

    const action = "getById";

    let category = await makeRequest(`../api/receivers/categoryReciever.php?action=${action}&id=${id}`, "GET");
    

}




window.addEventListener("load", initSite);