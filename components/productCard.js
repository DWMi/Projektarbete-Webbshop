

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("productCard").innerHTML = `
       
        <!-- Product Card  -->
        <div class="productCard-container">
            
            <div class="productCardInfo-MQ-container">
                <!-- Info text container -->
                <div class="productInfo-container">
                    <div class="productInfo-wrapper">
                        <h2>Category</h2>
                        <h3>Nike Air Max 90</h3>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, iusto.</h4>
                    </div>
                </div>

                <!-- Size container -->
                <div class="productSize-container">
                    <div class="productCardSize-wrapper">
                        <h2>Select Size</h2>
                        <div class="productCardSize-btn-wrapper">
                            <div class="size-btn"><p>39</p></div>
                            <div class="size-btn"><p>40</p></div>
                            <div class="size-btn"><p>41</p></div>
                            <div class="size-btn"><p>42</p></div>
                            <div class="size-btn"><p>43</p></div>
                            <div class="size-btn"><p>44</p></div>
                            <div class="size-btn"><p>45</p></div>
                            <div class="size-btn"><p>46</p></div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Swiper -->
            <div class="productSwiper-container">
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <!-- products --->
                        <div class="swiper-slide"><img src="https://static.feber.se/article_images/52/00/53/520053_1280.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="https://static.feber.se/article_images/52/00/53/520053_1280.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="https://static.feber.se/article_images/52/00/53/520053_1280.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="https://static.feber.se/article_images/52/00/53/520053_1280.jpg" alt=""></div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        
          
        </div>
        `
    } else {
        document.getElementById("productCard").innerHTML = `
        <!-- Product Card  -->
        <div class="productCard-container">
            <!-- Info text container -->
            <div class="productInfo-container">
                <div class="productInfo-wrapper">
                    <h2>Category</h2>
                    <h3>Nike Air Max 90</h3>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, iusto.</h4>
                </div>
            </div>

            <!-- Swiper -->
            <div class="productSwiper-container">
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <!-- products --->
                        <div class="swiper-slide"><img src="https://static.feber.se/article_images/52/00/53/520053_1280.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="https://static.feber.se/article_images/52/00/53/520053_1280.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="https://static.feber.se/article_images/52/00/53/520053_1280.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="https://static.feber.se/article_images/52/00/53/520053_1280.jpg" alt=""></div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        
                <!-- Size container -->
                <div class="productSize-container">
                    <div class="productCardSize-wrapper">
                        <h2>Select Size</h2>
                        <div class="productCardSize-btn-wrapper">
                            <div class="size-btn"><p>39</p></div>
                            <div class="size-btn"><p>40</p></div>
                            <div class="size-btn"><p>41</p></div>
                            <div class="size-btn"><p>42</p></div>
                            <div class="size-btn"><p>43</p></div>
                            <div class="size-btn"><p>44</p></div>
                            <div class="size-btn"><p>45</p></div>
                            <div class="size-btn"><p>46</p></div>
                        </div>
                    </div>
                </div>
        </div>
        `
    }
  }
  var y = window.matchMedia("(min-width: 983px)")
  var x = window.matchMedia("(max-width: 1414px)")
  myFunction(x,y) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
