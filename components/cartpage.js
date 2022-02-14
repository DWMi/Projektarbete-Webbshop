// ---------------------------CART PAGE CART --------------------------------------------------



function cartProductCard(y) {
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