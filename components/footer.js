import { makeRequest } from "../js/main.js";

export let navbar = document.getElementById("lastFooter").innerHTML = `

<div id="subContainer">
<div id="inputContainer">
<h6 id="subTitle">Subscribe to our newsletter!</h6>
<input type="name" name="newsletterName" id="subscribeName" placeholder="Name">
<input type="email" name="newsletterEmail" id="subscribeEmail" placeholder="Email">
<button id="subBtn">Subscribe!</button>
<p id="subInfoResponse"></p>
<p id="subResponse"></p>
</div>

</div>

<div id="bottomContainer">
    <h6>Copyright &copy 2022 Sneakers.</h6>

    <h6>About us.</h6>

    <h6>Contact us.</h6>

  
</div>
`


async function newSubscriber() {
    let list = [];
  
    let subInfo = {};
    subInfo.name = document.getElementById("subscribeName").value;
    subInfo.email = document.getElementById("subscribeEmail").value;
    let subResponse = document.getElementById("subResponse");
  
    list.push(subInfo);
  
    if (list[0].email === "") {
      document.getElementById("subInfoResponse").innerHTML =
        "Please insert your email.";
        
    } else {
      subResponse.style.display = "block";

      let action = "newSubscriber";
      let body = new FormData();
      body.append("subtonewsletter", JSON.stringify(list));
      
      let response = await makeRequest(
        `../api/receivers/subscriberReceiver.php?action=${action}`,
        "POST",
        body
        );
        

      
        document.getElementById("subInfoResponse").innerHTML = response;
      }
  }
  
  document.getElementById("subBtn").addEventListener("click", function () {
    newSubscriber();
  });