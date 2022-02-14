document.getElementById("navbar").innerHTML = `


<div class="navBar-container">

    <div class="navBar-logo"><a href="#"><h1>SNEAKERS<span>.</span></h1></a></div>

    <div class="navBar-category ">
        <div class="navbtn dropdown">
            <div id="btnContainer" ><button class="dropbtn"><h5>BRANDS</h5>
            <i class="fa fa-caret-down"></i> 
            </button></div>
            
            <div class="dropdown-content">
                <div class="dropdown-brand"><img src="./ASSETS/1.LOGOS/adidasOG.png" alt=""></div>
                <div class="dropdown-brand"><img src="./ASSETS/1.LOGOS/CONVERSE.png" alt=""></div>
                <div class="dropdown-brand"><img src="./ASSETS/1.LOGOS/NEW BALANCE.png" alt=""></div>
                <div class="dropdown-brand"><img src="./ASSETS/1.LOGOS/NIKE.png" alt=""></div>
                <div class="dropdown-brand"><img src="./ASSETS/1.LOGOS/SAUCONY.png" alt=""></div>
            </div>
        </div> 
        <div class="navbtn"><h5>ABOUT</h5></div>
        <div class="navbtn"><h5>CONTACTS</h5></div>
    </div> 

    <div class="navBar-user">
    <div class="userbtn"><h6>fName Lname</h6></div>
        <div class="userbtn navicon"><i class="naveIconSize far fa-user-circle"></i></div>
        <div class="userbtn navicon"><a href="./cartpage.html"><i class="naveIconSize fas fa-shopping-bag"></i></a></div>
    </div>
</div>


`