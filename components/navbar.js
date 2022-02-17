//the navbar.js file needs render.js to work aswell
import { getAllCategories } from '../js/main.js';
export let navbar = document.getElementById("navbar").innerHTML = `


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

    <div class="navBar-user">
    <div class="userbtn"><h6 id="name"></h6></div>
        <div class="userbtn navicon"><i class="naveIconSize far fa-user-circle"></i></div>
        <div class="userbtn navicon"><a href="./cartpage.html"><i class="naveIconSize fas fa-shopping-bag"></i></a></div>
        <button id="logOutBtn">Log Out</button>
    </div>
    </div>
</div>


`
export async function renderCategory(){
    let allCategories = await getAllCategories() 
    let categoryContainer = document.getElementsByClassName("dropdown-content")[0];

    allCategories.forEach(category => {
        
      

        // Creating div
        let categoryDiv  = document.createElement('div')
        categoryDiv.classList.add('dropdown-brand')
        categoryContainer.append(categoryDiv)

        let categoryImg = document.createElement('img')
        categoryImg.src = "./ASSETS/1.LOGOS/" + category.CategoryImg
        categoryDiv.append(categoryImg)

     
        categoryImg.addEventListener('click', function() {
            let id = category.CategoryId
            console.log("Click");
            window.location.href = "./product.html?category=" + id

        
        })
       

        })
    
}

renderCategory()