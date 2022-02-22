import { makeRequest } from "../js/main.js";

export let navbar = document.getElementById("lastFooter").innerHTML = `

<div id="subContainer">
<div id="inputContainer">
<h6 id="subTitle">Subscribe to our newsletter!</h6>
<input type="email" name="newsletter" id="subscribe" placeholder="Email">
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
  
    let subEmail = {};
    subEmail.email = document.getElementById("subscribe").value;
    let subResponse = document.getElementById("subResponse");
  
    list.push(subEmail);
  
    if (list[0].email === "") {
      document.getElementById("subInfoResponse").innerHTML =
        "Please insert your email.";
        
    } else {
      subResponse.style.display = "block";
      console.log(list);
      let action = "newSubscriber";
      let body = new FormData();
      body.append("subtonewsletter", JSON.stringify(list));
      
      let response = await makeRequest(
        `../api/receivers/subscriberReceiver.php?action=${action}`,
        "POST",
        body
        );
        
        console.log(response);
      
        document.getElementById("subInfoResponse").innerHTML = response;
      }
  }
  
  document.getElementById("subBtn").addEventListener("click", function () {
    newSubscriber();
  });