import {navbar, checkIsNormalUser, checkUserIsAdmin} from '../components/navbar.js';
import {getCart, makeRequest} from '../js/main.js';
async function initSite(){
  navbar;
  renderCartProductCard()

  
  localStorage.removeItem("freightOption")
}

var y = window.matchMedia("(max-width: 1032px)")
// ---------------------------CART PAGE CART --------------------------------------------------
let cartProductCards = document.getElementById("cartProductCard");

async function renderCartProductCard(){
  cartProductCards.innerHTML = "";

  let cart = await getCart();

  if (!cart || cart.length < 1) {
    document.getElementById("renderEmptyCart").innerText = "Your cart is empty.";
    return;
  } 

  let productCardContainer = document.createElement("div")
  productCardContainer.classList.add("cartProductCard-container")
  cartProductCards.append(productCardContainer)

  //cart card wrapper
  let cartCardWrapper = document.createElement("div")
  cartCardWrapper.classList.add("cartProductCard-wrapper")
  productCardContainer.append(cartCardWrapper)

  cart.forEach(cartProduct => {
  // --------------------------- CART ITEM --------------------------------------------------
    let cartItem = document.createElement("div")
    cartItem.classList.add("cartItem")
    cartCardWrapper.append(cartItem)
    //cart item div + img
    let cartItemImgContainer = document.createElement("div")
    cartItemImgContainer.classList.add("cartItem-img")
    cartItem.append(cartItemImgContainer)

    let cartItemImg = document.createElement("img")
    cartItemImg.src = "../ASSETS/PRODUCTS/" + cartProduct.imgSrc.ImageSrc;// IMG TAG  ----------------------------------------------<<<<<<<<<
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
    cartItemName.innerText = cartProduct.ProductName; // Name TAG  ----------------------------------------------<<<<<<<<<
    cartItemNameDiv.append(cartItemName)

    //cart item info Price div
    let cartItemPriceDiv = document.createElement("div")
    cartItemPriceDiv.classList.add("cartItem-price")
    cartItemInfoContainer.append(cartItemPriceDiv)
    //cart item info price
    let cartItemPrice = document.createElement("p")
    cartItemPrice.innerText =  cartProduct.Price + " $"; // Price TAG  ----------------------------------------------<<<<<<<<<
    cartItemPriceDiv.append(cartItemPrice)

    //cart item info Size div
    let cartItemSizeDiv = document.createElement("div")
    cartItemSizeDiv.classList.add("cartItem-size")
    cartItemInfoContainer.append(cartItemSizeDiv)
    //cart item info Size
    let cartItemSize = document.createElement("p")
    cartItemSize.innerText = "Size " + cartProduct.Size; // Size TAG  ----------------------------------------------<<<<<<<<<
    cartItemSizeDiv.append(cartItemSize)

    //cart qty -
    let cartItemQtyMiusDiv = document.createElement("div")
    //cartItemQtyMlusDiv.classList.add("cartItem-qty-minus")
    cartItemQtyMiusDiv.innerHTML = "-";
    cartItemQtyMiusDiv.style.cursor = "pointer";
    cartItem.append(cartItemQtyMiusDiv)
    cartItemQtyMiusDiv.addEventListener("click", async function(){
      
      if(cartProduct.Quantity == 1 ) {

        removeCartItem(cartProduct);

      } else {

        quantityMinus(cartProduct);

      }

      renderCartProductCard();

    })

    // ICON NOT WORKING..
    // let cartItemQtyPlus = document.createElement("i")
    // cartItemQtyPlus.classList.add("fa-solid","fa-circle-chevron-left")
    // cartItemQtyPlusDiv.append(cartItemQtyPlus)

    //cart qty number
    let cartItemQtyDiv = document.createElement("div")
    cartItemQtyDiv.classList.add("cartItem-qty")
    cartItem.append(cartItemQtyDiv)

    let cartItemQty = document.createElement("p")
    cartItemQtyDiv.append(cartItemQty)
    cartItemQty.innerText = cartProduct.Quantity; // Size Qty  ----------------------------------------------<<<<<<<<<
    
    //cart qty +
    let cartItemQtyPlusDiv = document.createElement("div")
    //cartItemQtyPlusDiv.classList.add("cartItem-qty-plus")
    cartItemQtyPlusDiv.innerHTML = "+";
    cartItemQtyPlusDiv.style.cursor = "pointer";
    cartItem.append(cartItemQtyPlusDiv)
    cartItemQtyPlusDiv.addEventListener("click", async function(){

      if(cartProduct.SizesInStock == cartProduct.Quantity) {
        
      } else {
        quantityPlus(cartProduct);
        renderCartProductCard();
      }

    })

    // ICON NOT WORKING..
    // let cartItemQtyMinus = document.createElement("i")
    // cartItemQtyMinus.classList.add("fa-solid","fa-circle-chevron-left")
    // cartItemQtyMlusDiv.append(cartItemQtyMinus)
      
    //cart qty del
    let cartItemDeleteDiv = document.createElement("div")
    //cartItemDeleteDiv.classList.add("cartItem-remove")
    cartItemDeleteDiv.innerHTML = "Remove";
    cartItemDeleteDiv.style.cursor = "pointer";
    cartItem.append(cartItemDeleteDiv)
    cartItemDeleteDiv.addEventListener("click", async function(){

      removeCartItem(cartProduct);

      renderCartProductCard();

    })

    // ICON NOT WORKING..
    // let cartItemQtyDelete = document.createElement("i")
    // cartItemDeleteDiv.append(cartItemQtyDelete)

//End forEach
})

// --------------------------- FREIGHT CONTAINER --------------------------------------------------

  let freightContainer = document.createElement("div")
  freightContainer.classList.add("freightContainer")
  //productCardContainer.append(freightContainer)

  productCardContainer.append(freightContainer);

  await renderFreightOptions(cart);

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
  subtotalPrice.id = "subtotal";
  checkoutSubtotalWrapper.append(subtotalPrice)

  //checkout-discount-wrapper
  let checkoutDiscountWrapper = document.createElement("div")
  checkoutDiscountWrapper.classList.add("checkout-discount-wrapper")
  checkoutInfoCard.append(checkoutDiscountWrapper)

  let discountText = document.createElement("h4")
  discountText.innerHTML = "Freight Cost"
  checkoutDiscountWrapper.append(discountText)

  let discountPrice = document.createElement("h4")
  discountPrice.innerHTML = "0 $"
  discountPrice.id = "freightCost";
  checkoutDiscountWrapper.append(discountPrice)

  //checkout-total-wrapper
  let checkoutTotalWrapper = document.createElement("div")
  checkoutTotalWrapper.classList.add("checkout-total-wrapper")
  checkoutInfoCard.append(checkoutTotalWrapper)

  let estimatedTotalText = document.createElement("h4")
  estimatedTotalText.innerHTML = "Estimated Total"
  checkoutTotalWrapper.append(estimatedTotalText)

  let estimatedTotal = document.createElement("h4")
  estimatedTotal.id = "estimatedTotal";
  checkoutTotalWrapper.append(estimatedTotal)
                
                
  //checkout-btn-wrapper
  let checkoutBtnWrapper = document.createElement("div")
  checkoutBtnWrapper.classList.add("checkout-btn-wrapper")
  checkoutInfoCard.append(checkoutBtnWrapper)

  let checkoutBtn = document.createElement("div")
  checkoutBtn.classList.add("checkout-btn")
  checkoutBtnWrapper.append(checkoutBtn)

  checkoutBtn.addEventListener("click", async function(){

    if(localStorage.getItem("freightOption")) {

      document.getElementById("checkoutMessage").innerHTML = "";

      cart.unshift(JSON.parse(localStorage.getItem("freightOption")));

      let orderNumber = await placeOrder(cart);

      console.log(orderNumber)
      // alert("Thank you for your purchase! Your order number is: " + orderNumber)
      // window.location.href = "myPages.html";

    } else {

      document.getElementById("checkoutMessage").innerHTML = "Please choose a freight option.";

    }

  })

  let checkoutMessage = document.createElement("p");
  checkoutMessage.id = "checkoutMessage";
  checkoutBtnWrapper.append(checkoutMessage);

  let checkoutBtnSpan = document.createElement("span")
  checkoutBtnSpan.innerHTML = "CHECKOUT NOW"
  checkoutBtn.append(checkoutBtnSpan)
  checkoutBtnSpan.setAttribute('id', 'coBtn')
  //checkout-payment       
  let checkoutPayment = document.createElement("div")
  checkoutPayment.classList.add("checkout-payment")
  checkoutWrapper.append(checkoutPayment)

  let paymentMethods = document.createElement("span")
  paymentMethods.innerHTML = "PAYMENT METHODS"
  checkoutPayment.append(paymentMethods)

  let paymentMethodsImg = document.createElement("img")
  paymentMethodsImg.src = "./ASSETS/1.LOGOS/payment logo.png"
  checkoutPayment.append(paymentMethodsImg)

  renderTotalPrice(cart);
  pleaseLogin()
}


async function renderFreightOptions(cart){

  document.getElementsByClassName("freightContainer")[0].innerHTML = "";

  let freightContainer = document.createElement("div")
  //productCardContainer.append(freightContainer)

  let freightInfo = document.createElement("h3");
  freightInfo.innerText = "CHOOSE FREIGHT OPTION:"
  freightContainer.append(freightInfo);



  let freightOptions = await getFreightOptions();

  freightOptions.forEach(freightOption => {

    let optionContainer = document.createElement("div");
    optionContainer.classList.add("freightOptionContainer");

    let optionNameContainer = document.createElement("div");
    optionNameContainer.classList.add("freightOptionTextContainer")

    let optionName = document.createElement("p");
    optionName.classList.add("freightText");
    optionName.innerHTML = freightOption.ShippingType;
    optionNameContainer.append(optionName);

    let optionPriceContainer = document.createElement("div");
    optionPriceContainer.classList.add("freightOptionTextContainer")

    let optionPrice = document.createElement("p");
    optionPrice.classList.add("freightText");
    optionPrice.innerHTML = freightOption.ShippingCost + " $";
    optionPriceContainer.append(optionPrice);

    let freightButton = document.createElement("div");
    freightButton.classList.add("freightButton");
    freightButton.innerHTML = "CHOOSE"

    if(localStorage.getItem("freightOption")) {
      if (JSON.parse(localStorage.getItem("freightOption")).ID == freightOption.ID) {
        freightButton.style.backgroundColor = "grey";
      }
    }

    freightButton.addEventListener("click", function(){
      
      if (localStorage.getItem("freightOption")) {
        localStorage.setItem("freightOption", JSON.stringify(freightOption));
        renderFreightOptions();
        renderTotalPrice(cart);
      } else {
        localStorage.setItem("freightOption", JSON.stringify(freightOption))
        freightButton.style.backgroundColor = "grey";
        renderTotalPrice(cart);
      }

    })

    optionContainer.append(optionNameContainer, optionPriceContainer, freightButton);
    freightContainer.append(optionContainer);

  })

  document.getElementsByClassName("freightContainer")[0].append(freightContainer);


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

function renderTotalPrice(cart){

  let totalPrice = 0;

  cart.forEach(item => {

    let price = item.Price * item.Quantity;

    totalPrice += price;

  })

  document.getElementById("subtotal").innerHTML = totalPrice + " $";

  if(localStorage.getItem("freightOption")) {
    totalPrice = totalPrice + parseInt(JSON.parse(localStorage.getItem("freightOption")).ShippingCost);
    document.getElementById("freightCost").innerHTML = JSON.parse(localStorage.getItem("freightOption")).ShippingCost + " $";
  }



  document.getElementById("estimatedTotal").innerHTML = totalPrice + " $";

}

async function quantityPlus(cartItem) {

  const action = "plus";

  let body = new FormData();
  body.append("cartItem", JSON.stringify(cartItem));

  let response = await makeRequest(`../api/receivers/cartReciever.php?action=${action}`, "POST", body);

  return response;

}

async function quantityMinus(cartItem) {

  const action = "minus";

  let body = new FormData();
  body.append("cartItem", JSON.stringify(cartItem));

  let response = await makeRequest(`../api/receivers/cartReciever.php?action=${action}`, "POST", body);

  return response;

}

async function removeCartItem(cartItem) {

  const action = "removeItem";

  let body = new FormData();
  body.append("cartItem", JSON.stringify(cartItem));

  let response = await makeRequest(`../api/receivers/cartReciever.php?action=${action}`, "POST", body);

  return response;

}

async function getFreightOptions() {

  const action = "getAll";

  let response = await makeRequest(`../api/receivers/freightReciever.php?action=${action}`, "GET");

  return response;

}

async function placeOrder(cart) {

  let action = "newOrder";

  let body = new FormData();
  body.append("cart", JSON.stringify(cart));

  let response = await makeRequest(`../api/receivers/orderReciever.php?action=${action}`, "POST", body);

  return response;

}

async function pleaseLogin(){
  
  const userFetch = await checkIsNormalUser();
  const adminFetch = await checkUserIsAdmin();


  if(!userFetch && !adminFetch) {
    const plsLogin = document.getElementById('coBtn'),
        checkoutBtn = document.getElementsByClassName('checkout-btn')[0]
    plsLogin.innerText = "Please log in before check out"
    checkoutBtn.addEventListener('click',function(){
      window.location.href = "login.html"
    })
  } 
}


  window.addEventListener("load", initSite)