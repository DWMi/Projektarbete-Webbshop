import {navbar} from '../components/navbar.js'
async function initSite(){

  navbar;
  renderCartProductCard()
}

var y = window.matchMedia("(max-width: 1032px)")
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
    
// --------------------------- CART ITEM --------------------------------------------------
      let cartItem = document.createElement("div")
      cartItem.classList.add("cartItem")
      cartCardWrapper.append(cartItem)
        //cart item div + img
        let cartItemImgContainer = document.createElement("div")
        cartItemImgContainer.classList.add("cartItem-img")
        cartItem.append(cartItemImgContainer)

        let cartItemImg = document.createElement("img")
        cartItemImg.src = ""// IMG TAG  ----------------------------------------------<<<<<<<<<
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
              cartItemName.innerText = "1" // Name TAG  ----------------------------------------------<<<<<<<<<
              cartItemNameDiv.append(cartItemName)

          //cart item info Price div
          let cartItemPriceDiv = document.createElement("div")
          cartItemPriceDiv.classList.add("cartItem-price")
          cartItemInfoContainer.append(cartItemPriceDiv)
              //cart item info price
              let cartItemPrice = document.createElement("p")
              cartItemPrice.innerText =  "2" // Price TAG  ----------------------------------------------<<<<<<<<<
              cartItemPriceDiv.append(cartItemPrice)

          //cart item info Size div
          let cartItemSizeDiv = document.createElement("div")
          cartItemSizeDiv.classList.add("cartItem-size")
          cartItemInfoContainer.append(cartItemSizeDiv)
              //cart item info Size
              let cartItemSize = document.createElement("p")
              cartItemSize.innerText = "3" // Size TAG  ----------------------------------------------<<<<<<<<<
              cartItemSizeDiv.append(cartItemSize)
          
          //cart qty +
          let cartItemQtyPlusDiv = document.createElement("div")
          cartItemQtyPlusDiv.classList.add("cartItem-qty-plus")
          cartItem.append(cartItemQtyPlusDiv)

          let cartItemQtyPlus = document.createElement("i")
          cartItemQtyPlus.classList.add("fa-solid","fa-circle-chevron-left")
          cartItemQtyPlusDiv.append(cartItemQtyPlus)

          //cart qty number
          let cartItemQtyDiv = document.createElement("div")
          cartItemQtyDiv.classList.add("cartItem-qty")
          cartItem.append(cartItemQtyDiv)

          let cartItemQty = document.createElement("p")
          cartItemQtyDiv.append(cartItemQty)
          cartItemQty.innerText = "4"// Size Qty  ----------------------------------------------<<<<<<<<<
          
          //cart qty -
          let cartItemQtyMlusDiv = document.createElement("div")
          cartItemQtyMlusDiv.classList.add("cartItem-qty-minus")
          cartItem.append(cartItemQtyMlusDiv)

            let cartItemQtyMinus = document.createElement("i")
            cartItemQtyMinus.classList.add("fa-solid","fa-circle-chevron-left")
            cartItemQtyMlusDiv.append(cartItemQtyMinus)
            
          //cart qty del
          let cartItemDeleteDiv = document.createElement("div")
          cartItemDeleteDiv.classList.add("cartItem-remove")
          cartItem.append(cartItemDeleteDiv)

          let cartItemQtyDelete = document.createElement("i")
          cartItemDeleteDiv.append(cartItemQtyDelete)

// --------------------------- CHECKOUT CONTAINER --------------------------------------------------
      //
      let checkoutContainer = document.createElement("div")
      checkoutContainer.classList.add("checkout-container")
      productCardContainer.append(checkoutContainer)

        //
        let checkoutWrapper = document.createElement("div")
        checkoutWrapper.classList.add("checkout-wrapper")
        checkoutContainer.append(checkoutWrapper)

                //
                let checkoutInfoCard = document.createElement("div")
                checkoutInfoCard.classList.add("checkout-info")
                checkoutWrapper.append(checkoutInfoCard)

                    let orderSummaryText = document.createElement("h3")
                    orderSummaryText.innerHTML = "ORDER SUMMARY"
                    checkoutInfoCard.append(orderSummaryText)
                //
                let checkoutSubtotalWrapper = document.createElement("div")
                checkoutSubtotalWrapper.classList.add("checkout-subtotal-wrapper")
                checkoutInfoCard.append(checkoutSubtotalWrapper)

                    let subtotalText = document.createElement("h4")
                    subtotalText.innerHTML = "Subtotal"
                    checkoutSubtotalWrapper.append(subtotalText)

                    let subtotalPrice = document.createElement("h4")
                    subtotalPrice.innerHTML = "559" + "$"
                    checkoutSubtotalWrapper.append(subtotalPrice)

                //checkout-discount-wrapper
                let checkoutDiscountWrapper = document.createElement("div")
                checkoutDiscountWrapper.classList.add("checkout-discount-wrapper")
                checkoutInfoCard.append(checkoutDiscountWrapper)

                    let discountText = document.createElement("h4")
                    discountText.innerHTML = "Discount"
                    checkoutDiscountWrapper.append(discountText)

                    let discountPrice = document.createElement("h4")
                    discountPrice.innerHTML = "0" + "$"
                    checkoutDiscountWrapper.append(discountPrice)

                //checkout-total-wrapper
                let checkoutTotalWrapper = document.createElement("div")
                checkoutTotalWrapper.classList.add("checkout-total-wrapper")
                checkoutInfoCard.append(checkoutTotalWrapper)

                    let estimatedTotalText = document.createElement("h4")
                    estimatedTotalText.innerHTML = "Estimated Total"
                    checkoutTotalWrapper.append(estimatedTotalText)

                    let estimatedTotal = document.createElement("h4")
                    estimatedTotal.innerHTML = "599" + "$"
                    checkoutTotalWrapper.append(estimatedTotal)
                
                
                //checkout-btn-wrapper
                let checkoutBtnWrapper = document.createElement("div")
                checkoutBtnWrapper.classList.add("checkout-btn-wrapper")
                checkoutInfoCard.append(checkoutBtnWrapper)

                    let checkoutBtn = document.createElement("div")
                    checkoutBtn.classList.add("checkout-btn")
                    checkoutBtnWrapper.append(checkoutBtn)

                    let checkoutBtnSpan = document.createElement("span")
                    checkoutBtnSpan.innerHTML = "CHECKOUT NOW"
                    checkoutBtn.append(checkoutBtnSpan)
         //checkout-payment       
        let checkoutPayment = document.createElement("div")
        checkoutPayment.classList.add("checkout-payment")
        checkoutWrapper.append(checkoutPayment)

            let paymentMethods = document.createElement("span")
            paymentMethods.innerHTML = "PAYMENTS METHODS"
            checkoutPayment.append(paymentMethods)

            let paymentMethodsImg = document.createElement("img")
            paymentMethodsImg.src = "./ASSETS/1.LOGOS/payment logo.png"
            checkoutPayment.append(paymentMethodsImg)
                    
}

// ------------------ NOT IN USE ITS >>>TRASH<<<< BUT KEEP IT ------------THANKS!-----------------
function cartProductCardsdsads(y) {
    if (y.matches) { // If media query matches
        document.getElementById("cartProductCard").innerHTML = `
  
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

  window.addEventListener("load", initSite)
  