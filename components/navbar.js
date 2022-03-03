//the navbar.js file needs render.js to work aswell
import { getAllCategories } from "../js/main.js";
import { makeRequest } from "../js/main.js";
import { getCart } from "../js/main.js";

export let navbar = (document.getElementById("navbar").innerHTML = `


<div class="navBar-container">

    <div class="navBar-logo"><a href="./index.html">
            <h1>SNEAKERS<span>.</span></h1>
        </a></div>

    <div class="navBar-category ">
        <div class="navbtn dropdown">
            <div id="btnContainer"><button class="dropbtn">
                    <h5>BRANDS</h5><i class="fa fa-caret-down"></i>
                </button></div>


            <div class="dropdown-content">


                <div class="dropdown-content" id="category-dropdown"></div>
            </div>
            <div class="navbtn">
                <h5>ABOUT</h5>
            </div>
            <div class="navbtn">
                <h5>CONTACTS</h5>
            </div>
        </div>

    </div>


    <div class="navBar-user">
        <div class="user-dropdown">
            <div id="navUser" class="userbtn navicon"><i class="naveIconSize far fa-user-circle"></i></div>
            <div class="user-dropdown-content">

                <a id="logInBtn" href="login.html">
                    Login
                </a>
                <div class="userbtn">
                    <h6 id="name"></h6>
                </div>
                <button class="selectBtn" id="logOutBtn">Log out</button>

            </div>
        </div>


        <div id="userNavIcon" class="userbtn navicon"><a href="./cartpage.html"><i
                    class="naveIconSize fas fa-shopping-bag"></i>
            </a><span id="count"></span>
        </div>
          <div id="hambDropDown">&#9776;</div>
    </div>

   
    
        <div id="hambContainer">
            <div id="brands"></div>
            <div id="about"><a href="#">About</a></div>
            <div id="contact"><a href="#">Contact</a></div>
            <div id="cart"><a href="cartPage.html">Your Bag</a></div>
        </div>
</div>
        
        
`
);

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
const navUserBtn = document.getElementById("navUser");

async function initSite() {
  navbar;
  isAUser();
  hamburger()
  UserIsAdmin();
  renderCategory();
  showNumberCart()
}



async function logOutUser() {
  let url = "../api/controllers/logOutUser.php";
  let method = "DELETE";

  let result = await makeRequest(url, method, undefined);

  if (result == true) {
    window.location.href = "index.html";
    localStorage.clear();
  }
}

// CHECK WHAT KIND OF USER IS LOGGED IN

export async function checkUserIsAdmin() {
  let url = "../api/controllers/authAdmin.php";
  let method = "GET";

  let result = await makeRequest(url, method, undefined);
  
  return result;
}

export async function UserIsAdmin() {
  let url = "../api/controllers/authAdmin.php";
  let method = "GET";

  let result = await makeRequest(url, method, undefined);
  let user = result[0];

  console.log(result,  "checkUserIsAdmin");

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
        navUserBtn.style.color ="black";

      return false
    } else if (user.UserIsAdmin === 1) {
      logInBtn.style.display = "none";
      console.log("ADMIN");
      userName.innerHTML = `${user.UserFirstName} ${user.UserLastName} (ADMIN)`;
     
      logOutBtn.style.display = "flex";
      navUserBtn.style.color ="black";
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
      return result;
    }
  }
}

export async function checkIsNormalUser() {
  let url = "../api/controllers/authUser.php";
  let method = "GET";

  let result = await makeRequest(url, method, undefined);
 
  return result
}



 export async function isAUser() {
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
    navUserBtn.style.color ="gray";
    return result;
  }
}


const hamburger=async()=>{
  const hbmenu = document.getElementById('hambDropDown')
  let state = false
  hbmenu.addEventListener('click',function(){
    if(state === false){
        const hambContainer = document.getElementById('hambContainer')
        hambContainer.style.display="flex"
        state = true
        const hambDropDown = document.getElementById('hambDropDown').innerHTML="&#10006;"
      }else{
        const hambContainer = document.getElementById('hambContainer')
        hambContainer.style.display="none"
        state = false
        const hambDropDown = document.getElementById('hambDropDown').innerHTML="&#9776;"
      }
    })

    window.addEventListener("resize", () => {
      if(window.screen.width > 700) {
        const hambContainer = document.getElementById('hambContainer')
        hambContainer.style.display="none"
        state = false
        const hambDropDown = document.getElementById('hambDropDown').innerHTML="&#9776;"
      }
    })

  let renderCategory = await getAllCategories();

  for (let i=0; i < renderCategory.length; i++){
    const hambDivs = document.createElement('div'),
    brandDivs = document.getElementById('brands')
    brandDivs.appendChild(hambDivs)
    hambDivs.setAttribute('id',`${renderCategory[i].CategoryName}` )
    hambDivs.innerText=`${renderCategory[i].CategoryName}`
    
    hambDivs.addEventListener("click", function () {
      let id = renderCategory[i].ID;
      window.location.href = "./product.html?category=" + id;
    });
  }
  

}


export async function showNumberCart(){
  let cart = await getCart()
  console.log(cart);
  if (cart && cart.length > 0) {
    let cartNumber = 0;
    for (let index = 0; index < cart.length; index++) {
      cartNumber = cartNumber + cart[index].Quantity;
      console.log(cartNumber);
    }
    document.getElementById("count").style.display = "block";
    document.getElementById("count").innerHTML = cartNumber;
  } 
  
}



window.addEventListener("load", initSite);
