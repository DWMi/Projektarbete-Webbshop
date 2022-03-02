//the navbar.js file needs render.js to work aswell
import { getAllCategories } from "../js/main.js";
import { makeRequest } from "../js/main.js";

export let navbar = (document.getElementById("navbar").innerHTML = `


<div class="navBar-container">

    <div class="navBar-logo"><a href="./index.html"><h1>SNEAKERS<span>.</span></h1></a></div>

    <div class="navBar-category ">
        <div class="navbtn dropdown">
            <div id="btnContainer" ><button class="dropbtn"><h5>BRANDS</h5>
            <i class="fa fa-caret-down"></i> 
            </button></div>
            

            <div class="dropdown-content">
     

                <div class="dropdown-content" id="category-dropdown">
                


                </div>
            </div> 
        <div class="navbtn"><h5>ABOUT</h5></div>
        <div class="navbtn"><h5>CONTACTS</h5></div>
    </div> 

    </div> 

    
    

<div class="navBar-user">
    <div class="userbtn"><h6 id="name"></h6></div>
    <div class="user-dropdown">
    <div class="userbtn navicon"><i class="naveIconSize far fa-user-circle"></i></div>
    <div class="user-dropdown-content">

        <a id="logInBtn" href="login.html">
        Login
        </a>
        <button class="selectBtn" id="logOutBtn">Log out</button>

        </div>
        </div>
        <div class="userbtn navicon"><a href="./cartpage.html"><i class="naveIconSize fas fa-shopping-bag"></i></a></div>
        
        </div>
        
        </div>
        
        
        `);
// <a class="myAcc" id="myAcc" href="./myPages.html">My account</a>
// <a class="myAdm" id="myAdm" href="./admin.html">Admin Page 😎</a>
export async function renderCategory() {
  let allCategories = await getAllCategories();
  let categoryContainer =
    document.getElementsByClassName("dropdown-content")[0];

  allCategories.forEach((category) => {
    // Creating div
    let categoryDiv = document.createElement("div");
    categoryDiv.classList.add("dropdown-brand");
    categoryContainer.append(categoryDiv);

    let categoryImg = document.createElement("img");
    categoryImg.src = "./ASSETS/1.LOGOS/" + category.CategoryIMG;
    categoryDiv.append(categoryImg);

    categoryImg.addEventListener("click", function () {
      let id = category.ID;
      console.log(category);
      window.location.href = "./product.html?category=" + id;
    });
  });
}

let userName = document.getElementById("name");
let logOutBtn = document.getElementById("logOutBtn");
let logInBtn = document.getElementById("logInBtn");
logOutBtn.addEventListener("click", logOutUser);
const myAccBtn = document.getElementById("myAcc");

async function initSite() {
  navbar;
  isAUser();
  checkUserIsAdmin();
}



async function logOutUser() {
  let url = "../api/controllers/logOutUser.php";
  let method = "DELETE";

  let result = await makeRequest(url, method, undefined);

  if (result == true) {
    window.location.href = "index.html";
  }
}

// CHECK WHAT KIND OF USER IS LOGGED IN
export async function checkUserIsAdmin() {
  let url = "../api/controllers/authAdmin.php";
  let method = "GET";

  let result = await makeRequest(url, method, undefined);
  let user = result[0];

  console.log(result, "checkUserIsAdmin");

  if (result) {
    
    if (user.UserIsAdmin === 0) {
        const btnRend = document.getElementsByClassName("user-dropdown-content")[0];
        const myAcc = document.createElement("a");
    
        btnRend.appendChild(myAcc).setAttribute("class", "myAcc");
        myAcc.setAttribute("id", "myAcc");
        myAcc.setAttribute("href", "./myPages.html");
        myAcc.innerText = "My Order";
        userName.innerText = `${user.UserFirstName} ${user.UserLastName} (NormalUser)`;
    
        logInBtn.style.display = "none";
        logOutBtn.style.display = "flex";
      return false
    } else if (user.UserIsAdmin === 1) {
      console.log("ADMIN");
      userName.innerText = `${user.UserFirstName} ${user.UserLastName} (ADMIN)`;
      logInBtn.style.display = "none";
      logOutBtn.style.display = "flex";

      const btnDropdownRenderer = document.getElementsByClassName(
        "user-dropdown-content"
      )[0];
      const myAcc = document.createElement("a");

      btnDropdownRenderer.appendChild(myAcc).setAttribute("class", "myAcc");
      myAcc.setAttribute("id", "myAcc");
      myAcc.setAttribute("href", "./myPages.html");
      myAcc.innerText = "My Orders";

      const admBtn = document.createElement("a");
      btnDropdownRenderer.appendChild(admBtn);
      admBtn.setAttribute("class", "myAdm");
      admBtn.setAttribute("id", "myAdm");
      admBtn.setAttribute("href", "./Admin.html");
      admBtn.innerText = "Admin Page😎";

      admBtn.style.display = "flex";
      myAcc.style.display = "flex";
    }
  }
}

export async function checkIsNormalUser() {
  let url = "../api/controllers/authUser.php";
  let method = "GET";

  let result = await makeRequest(url, method, undefined);
 
  return result
}



 async function isAUser() {
  let url = "../api/controllers/authUser.php";
  let method = "GET";

  let result = await makeRequest(url, method, undefined);
  let user = result[0];


  if (!user) {
    logInBtn.style.display = "flex";
    console.log(false);
  } else if (user.UserIsAdmin === 0) {
    const btnRend = document.getElementsByClassName("user-dropdown-content")[0];
    const myAcc = document.createElement("a");

    btnRend.appendChild(myAcc).setAttribute("class", "myAcc");
    myAcc.setAttribute("id", "myAcc");
    myAcc.setAttribute("href", "./myPages.html");
    myAcc.innerText = "My Orders    ";
    userName.innerText = `${user.UserFirstName} ${user.UserLastName} (NormalUser)`;

    logInBtn.style.display = "none";
    logOutBtn.style.display = "flex";
    return result;
  }
}

renderCategory();
window.addEventListener("load", initSite);
