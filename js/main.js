

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

async function getAllProducts(){

    const action = "getAll";

    let allProducts = await makeRequest(`../api/receivers/productReceiver.php?action=${action}`, "GET");
    console.log(allProducts);

}




window.addEventListener("load", initSite);
