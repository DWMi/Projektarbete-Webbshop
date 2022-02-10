// ---------------------------CART PAGE CART --------------------------------------------------



function cartProductCard(y) {
    if (y.matches) { // If media query matches
        document.getElementById("cartProductCard").innerHTML = `
       
        <!-- Cart Product Card  -->
        <div class="cartProductCard-container">
           hejadawadadwadwadadwdawdawadwdawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
        </div>
        
        `
    } else {
        document.getElementById("cartProductCard").innerHTML = `
        <!-- Cart Product Card  -->
        <div class="cartTitle-container"> 
            <h1> YOUR BAG </h1> 
        
        </div>

        <div class="cartProductCard-container">
           
        </div>
        `
    }
  }
  var y = window.matchMedia("(max-width: 1439px)")
  
  cartProductCard(y) // Call listener function at run time
  y.addListener(cartProductCard) // Attach listener function on state changes