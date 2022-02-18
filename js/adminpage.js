import {makeRequest} from "./main.js";


async function newNewsletter(){

    let list = []

    let newsInformation = {};
    newsInformation.name = document.getElementById("newsTitle").value;
    newsInformation.description = document.getElementById("newsBody").value;
    let newsResponse = document.getElementById("newsResponse")

    

    list.push(newsInformation)
    if(list[0].name == "" || list[0].name == null || list[0].description == "" || list[0].description == null) {
        document.getElementById("newsletterInformationReturn").innerHTML= "Please fill out all the fields.";
    }
    else {
        newsResponse.style.display = "block"
        setTimeout(function(){ location.reload(); }, 2500);
    }
    console.log(list);
    let action = "newNewsletter";
    let body = new FormData();
    body.append("newsletter", JSON.stringify(list));

    let response = await makeRequest(`../api/receivers/newsletterReceiver.php?action=${action}`, "POST", body);

    console.log(response);
    

}

document.getElementById("saveNews").addEventListener("click", function(){
    newNewsletter();
});