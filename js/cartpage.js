// ---------------------------CART PAGE CART --------------------------------------------------
let cartProductCards = document.getElementById("cartProductCard");

function renderCartProductCard(){

  let productCardContainer = document.createElement("div")
  productCardContainer.classList.add("cartProductCard-container")
  cartProductCards.append(productCardContainer)
    //cart card wrapper
    let cartCardWrapper = document.createElement("div")
    cartCardWrapper.classList.add("cartProductCard-wrapper")
    productCardContainer.append(cartCardWrapper)
    
      //cart item 
      let cartItem = document.createElement("div")
      cartItem.classList.add("cartItem")
      cartCardWrapper.append(cartItem)
        //cart item div + img
        let cartItemImgContainer = document.createElement("div")
        cartItemImgContainer.classList.add("cartItem-img")
        cartItem.append(cartItemImgContainer)

        let cartItemImg = document.createElement("img")
        cartItemImg = // IMG TAG  ----------------------------------------------<<<<<<<<<
        cartItemImgContainer.append(cartItemImg)

      //cart item info container
      let cartItemInfoContainer = document.createElement("div")
      cartItemInfoContainer.classList.add("cartItem-info")
      cartItem.append(cartItemInfoContainer)
          //cart item info name div
          let cartItemNameDiv = document.createElement("div")
          cartItemNameDiv.classList.add("cartItem-name")
          cartItemInfoContainer.append(cartItemNameDiv)
              //cart item info name
              let cartItemName = document.createElement("p")
              cartItemName.innerText = // Name TAG  ----------------------------------------------<<<<<<<<<
              cartItemNameDiv.append(cartItemName)

          //cart item info Price div
          let cartItemPriceDiv = document.createElement("div")
          cartItemPriceDiv.classList.add("cartItem-price")
          cartItemInfoContainer.append(cartItemPriceDiv)
              //cart item info price
              let cartItemPrice = document.createElement("p")
              cartItemPrice.innerText = // Price TAG  ----------------------------------------------<<<<<<<<<
              cartItemPriceDiv.append(cartItemPrice)

          //cart item info Size div
          let cartItemSizeDiv = document.createElement("div")
          cartItemSizeDiv.classList.add("cartItem-size")
          cartItemInfoContainer.append(cartItemSizeDiv)
              //cart item info Size
              let cartItemSize = document.createElement("p")
              cartItemSize.innerText = // Size TAG  ----------------------------------------------<<<<<<<<<
              cartItemSizeDiv.append(cartItemSize)
          
          //cart qty +
          let cartItemQtyPlusDiv = document.createElement("div")
          cartItemQtyPlusDiv.classList.add("cartItem-qty-plus")
          cartItem.append(cartItemQtyPlusDiv)

          let cartItemQtyPlusText = document.createElement("i")
          

          //cart qty number
          let cartItemQtyDiv = document.createElement("div")
          cartItemQtyDiv.classList.add("cartItem-qty")
          cartItem.append(cartItemQtyDiv)

          let cartItemQty = document.createElement("p")
          cartItemSize.innerText = // Size Qty  ----------------------------------------------<<<<<<<<<
          //cart qty -
          let cartItemQtyMlusDiv = document.createElement("div")
          cartItemQtyMlusDiv.classList.add("cartItem-qty-minus")
          cartItem.append(cartItemQtyMlusDiv)

          let cartItemQtyMinusText = document.createElement("i")
      
          //cart qty del
          let cartItemDeleteDiv = document.createElement("div")
          cartItemDeleteDiv.classList.add("cartItem-remove")
          cartItem.append(cartItemDeleteDiv)

          let cartItemQtyDelete = document.createElement("i")
}


function cartProductCardsdsads(y) {
    if (y.matches) { // If media query matches
        document.getElementById("cartProductCard").innerHTML = `
       
    <div class="cart-title">
        <h3> YOUR BAG </h3> 
    </div>
    <div class="cartProductCard-container">
        <div class="cartProductCard-wrapper">
            <div class="cartItem">
              <div class="cartItem-img"><img src="./ASSETS/ADIDAS/adidas Dame 7 Extply 1.jpeg" alt="" srcset=""></div>
              <div class="cartItem-info">
                <div class="cartItem-name"><p>Adidas Dame 7</p></div>
                <div class="cartItem-price"><p>559$</p></div>
                <div class="cartItem-size"><p>Size: 43</p></div>
              </div>
              <div class="cartItem-qty-plus"><p>+</p></div>
              <div class="cartItem-qty"><p>1</p></div>
              <div class="cartItem-qty-minus"><p>-</p></div>
              <div class="cartItem-remove"><p>X</p></div>
            </div>
           
      
        </div>

    </div>





        <div class="checkout-container">
            <div class="checkout-wrapper">
                <div class="checkout-info">
                <h3>ORDER SUMMARY</h3>
                <div class="checkout-subtotal-wrapper">
                    <h4>Subtotal</h4>
                    <h4>559$</h4>
                </div>
                <div class="checkout-discount-wrapper">
                    <h4>Discount</h4>
                    <h4>0$</h4>
                </div>
                <div class="checkout-total-wrapper">
                    <h4>Estimated Total</h4>
                    <h4>559$</h4>
                </div>
                <div class="checkout-btn-wrapper">
                    <div class="checkout-btn"><span>CHECKOUT NOW</span></div>
                </div>
                </div>
                <div class="checkout-payment">
                    <span>PAYMENTS METHODS</span>
                    <img src="./ASSETS/1.LOGOS/payment logo.png" alt="">
                </div>
            </div>
        </div>    
        `
    } else {
        document.getElementById("cartProductCard").innerHTML = `
        <div class="cart-title">
        <h3> YOUR BAG </h3> 
  </div>
  <div class="cartProductCard-container">
        <div class="cartProductCard-wrapper">
        <div class="cartItem">
        <div class="cartItem-img"><img src="./ASSETS/ADIDAS/adidas Dame 7 Extply 1.jpeg" alt="" srcset=""></div>
        <div class="cartItem-info">
          <div class="cartItem-name"><p>Adidas Dame 7</p></div>
          <div class="cartItem-price"><p>559$</p></div>
          <div class="cartItem-size"><p>Size: 43</p></div>
        </div>
        <div class="cartItme-qty-plus"><p>+</p></div>
        <div class="cartItem-qty"><p>1</p></div>
        <div class="cartItem-qty-minus"><p>-</p></div>
        <div class="cartItem-remove"><p>X</p></div>
      </div>
      <div class="cartItem">
          <div class="cartItem-img"><img src="./ASSETS/ADIDAS/adidas Dame 7 Extply 1.jpeg" alt="" srcset=""></div>
          <div class="cartItem-info">
              <div class="cartItem-name"><p>Adidas Dame 7</p></div>
              <div class="cartItem-price"><p>559$</p></div>
              <div class="cartItem-size"><p>Size: 43</p></div>
          </div>
          <div class="cartItme-qty-plus"><p>+</p></div>
          <div class="cartItem-qty"><p>1</p></div>
          <div class="cartItem-qty-minus"><p>-</p></div>
          <div class="cartItem-remove"><p>X</p></div>
      </div>
      <div class="cartItem">
          <div class="cartItem-img"><img src="./ASSETS/ADIDAS/adidas Dame 7 Extply 1.jpeg" alt="" srcset=""></div>
          <div class="cartItem-info">
              <div class="cartItem-name"><p>Adidas Dame 7</p></div>
              <div class="cartItem-price"><p>559$</p></div>
              <div class="cartItem-size"><p>Size: 43</p></div>
          </div>
          <div class="cartItme-qty-plus"><p>+</p></div>
          <div class="cartItem-qty"><p>1</p></div>
          <div class="cartItem-qty-minus"><p>-</p></div>
          <div class="cartItem-remove"><p>X</p></div>
      </div>
      
            </div>
            <div class="checkout-container">
              <div class="checkout-wrapper">
                <div class="checkout-info">
                  <h3>ORDER SUMMARY</h3>
                  <div class="checkout-subtotal-wrapper">
                    <h4>Subtotal</h4>
                    <h4>559$</h4>
                  </div>
                  <div class="checkout-discount-wrapper">
                    <h4>Discount</h4>
                    <h4>0$</h4>
                  </div>
                  <div class="checkout-total-wrapper">
                    <h4>Estimated Total</h4>
                    <h4>559$</h4>
                  </div>
                  <div class="checkout-btn-wrapper">
                    <div class="checkout-btn"><span>CHECKOUT NOW</span></div>
                  </div>
                </div>
                <div class="checkout-payment">
                  <span>PAYMENTS METHODS</span>
                  <img src="./ASSETS/1.LOGOS/payment logo.png" alt="">
                </div>
              </div>

        </div>
    </div>
        `
    }
  }
  var y = window.matchMedia("(max-width: 1032px)")
  
  cartProductCard(y) // Call listener function at run time
  y.addListener(cartProductCard) // Attach listener function on state changes