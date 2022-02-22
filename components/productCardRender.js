import { getAllProductsByCategory, makeRequest } from "../js/main.js";
import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

//fixa
//size btn
//skicka med objekt via köp btn till session

let MQ = window.matchMedia("(max-width: 1439px)");

async function initSite() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get("category");
  const product = urlParams.get("product");

  MQ.addListener(renderProductCard); // Attach listener function on state changes

  renderProductInCategory(category);

  /* renderProductCard(product) */
}

let productCard = document.getElementById("productCard");

async function renderProductCard(product) {
  console.log("Product", product);
  productCard.innerHTML = "";

  if (MQ.matches) {
    let productCardContainer = document.createElement("div");
    productCardContainer.classList.add("productCard-container");
    productCard.append(productCardContainer);

    let mqProductCardContainer = document.createElement("div");
    mqProductCardContainer.classList.add("productCardInfo-MQ-container");
    productCardContainer.append(mqProductCardContainer);
    //info text container
    let productInfoContainer = document.createElement("div");
    productInfoContainer.classList.add("productInfo-container");
    mqProductCardContainer.append(productInfoContainer);
    //wrapper container
    let productInfoWrapper = document.createElement("div");
    productInfoWrapper.classList.add("productInfo-wrapper");
    productInfoContainer.append(productInfoWrapper);
    /// LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP

    //inside the wrapper
    let categoryText = document.createElement("h2");
    categoryText.innerHTML = "Category";
    productInfoWrapper.append(categoryText);

    let productName = document.createElement("h3");
    productName.innerHTML = product.ProductName;
    productInfoWrapper.append(productName);

    let productDesc = document.createElement("h4");
    productDesc.innerHTML = product.ProductDescription;
    productInfoWrapper.append(productDesc);

    //Size container
    let productSizeContainer = document.createElement("div");
    productSizeContainer.classList.add("productSize-container");
    mqProductCardContainer.append(productSizeContainer);
    //product card size wrapper
    let productCardSizeWrapper = document.createElement("div");
    productCardSizeWrapper.classList.add("productCardSize-wrapper");
    productSizeContainer.append(productCardSizeWrapper);
    //product card size wrapper
    let productCardSizeText = document.createElement("h2");
    productCardSizeText.innerText = "SELECT SIZE";
    productCardSizeWrapper.append(productCardSizeText);

    //product card size btn wrapper
    let productCardSizeBtnWrapper = document.createElement("div");
    productCardSizeBtnWrapper.classList.add("productCardSize-btn-wrapper");
    productCardSizeWrapper.append(productCardSizeBtnWrapper);
    //LOOOOOOOOOOOOOOOOOOOOOOOOOOOOP SIZE

    console.log("SIZES: ", product.Sizes);
    product.Sizes.forEach((size) => {
      //product card size btn wrapper
      let sizeBtn = document.createElement("div");
      sizeBtn.classList.add("size-btn");
      productCardSizeBtnWrapper.append(sizeBtn);

      let sizeBtnText = document.createElement("p");

      if (size.SizesInStock < 1) {
        sizeBtn = "";
      } else {
        sizeBtnText.innerHTML = size.Size;
      }

      sizeBtn.append(sizeBtnText);
    });

    let productCardPrice = document.createElement("h2");
    productCardPrice.innerText = product.ProductPrice + "$";
    productCardSizeWrapper.append(productCardPrice);

    //Add to cart btn wrapper
    let productAddToCartBtnWrapper = document.createElement("div");
    productAddToCartBtnWrapper.classList.add("productAddToCart-btn-wrapper");
    productCardSizeWrapper.append(productAddToCartBtnWrapper);
    //Add to cart btn
    let productAddToCartBtn = document.createElement("div");
    productAddToCartBtn.classList.add("productAddToCart-btn");
    productAddToCartBtn.innerText = "Add to Cart";
    productAddToCartBtnWrapper.append(productAddToCartBtn);

    // product swiper container
    let productSwiperContainer = document.createElement("div");
    productSwiperContainer.classList.add("productSwiper-container");
    productCardContainer.append(productSwiperContainer);
    //swiper container
    let swiperContainer = document.createElement("div");
    swiperContainer.classList.add("swiper", "mySwiper");
    productSwiperContainer.append(swiperContainer);
    //swiper wrapper
    let swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");
    swiperContainer.append(swiperWrapper);
    /// LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP
    //swiper slider

    product.Images.forEach((productimg) => {
      let swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide", "swiper-product-div");
      swiperWrapper.append(swiperSlide);

      let swiperSlideImg = document.createElement("img");

      //swiper slider img
      swiperSlideImg.src = "./ASSETS/PRODUCTS/" + productimg.ImageSrc + ".jpeg";

      swiperSlide.append(swiperSlideImg);
    });

    //swiper btn next
    let swiperBtnNext = document.createElement("div");
    swiperBtnNext.classList.add("swiper-button-next", "swiper-button-next-one");
    swiperContainer.append(swiperBtnNext);

    //swiper btn prev
    let swiperBtnPrev = document.createElement("div");
    swiperBtnPrev.classList.add("swiper-button-prev", "swiper-button-prev-one");
    swiperContainer.append(swiperBtnPrev);

    //swiper pagination
    let swiperPagination = document.createElement("div");
    swiperPagination.classList.add("swiper-pagination");
    swiperContainer.append(swiperPagination);

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-one",
        prevEl: ".swiper-button-prev-one",
      },
    });

    console.log(swiper);
  } else {
    let productCardContainer = document.createElement("div");
    productCardContainer.classList.add("productCard-container");
    productCard.append(productCardContainer);

    //info text container
    let productInfoContainer = document.createElement("div");
    productInfoContainer.classList.add("productInfo-container");
    productCardContainer.append(productInfoContainer);
    //wrapper container
    let productInfoWrapper = document.createElement("div");
    productInfoWrapper.classList.add("productInfo-wrapper");
    productInfoContainer.append(productInfoWrapper);
    /// LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP

    //inside the wrapper
    let categoryText = document.createElement("h2");
    categoryText.innerHTML = "Category";
    productInfoWrapper.append(categoryText);

    let productName = document.createElement("h3");
    productName.innerHTML = product.ProductName;
    productInfoWrapper.append(productName);

    let productDesc = document.createElement("h4");
    productDesc.innerHTML = product.ProductDescription;
    productInfoWrapper.append(productDesc);

    // product swiper container
    let productSwiperContainer = document.createElement("div");
    productSwiperContainer.classList.add("productSwiper-container");
    productCardContainer.append(productSwiperContainer);
    //swiper container
    let swiperContainer = document.createElement("div");
    swiperContainer.classList.add("swiper", "mySwiper");
    productSwiperContainer.append(swiperContainer);
    //swiper wrapper
    let swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");
    swiperContainer.append(swiperWrapper);
    /// LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP
    //swiper slider

    product.Images.forEach((productimg) => {
      let swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide", "swiper-product-div");
      swiperWrapper.append(swiperSlide);

      let swiperSlideImg = document.createElement("img");

      //swiper slider img
      swiperSlideImg.src = "./ASSETS/PRODUCTS/" + productimg.ImageSrc + ".jpeg";

      swiperSlide.append(swiperSlideImg);
    });

    //swiper btn next
    let swiperBtnNext = document.createElement("div");
    swiperBtnNext.classList.add("swiper-button-next", "swiper-button-next-one");
    swiperContainer.append(swiperBtnNext);

    //swiper btn prev
    let swiperBtnPrev = document.createElement("div");
    swiperBtnPrev.classList.add("swiper-button-prev", "swiper-button-prev-one");
    swiperContainer.append(swiperBtnPrev);

    //swiper pagination
    let swiperPagination = document.createElement("div");
    swiperPagination.classList.add("swiper-pagination");
    swiperContainer.append(swiperPagination);

    //Size container
    let productSizeContainer = document.createElement("div");
    productSizeContainer.classList.add("productSize-container");
    productCardContainer.append(productSizeContainer);
    //product card size wrapper
    let productCardSizeWrapper = document.createElement("div");
    productCardSizeWrapper.classList.add("productCardSize-wrapper");
    productSizeContainer.append(productCardSizeWrapper);
    //product card size wrapper
    let productCardSizeText = document.createElement("h2");
    productCardSizeText.innerText = "SELECT SIZE";
    productCardSizeWrapper.append(productCardSizeText);

    //product card size btn wrapper
    let productCardSizeBtnWrapper = document.createElement("div");
    productCardSizeBtnWrapper.classList.add("productCardSize-btn-wrapper");
    productCardSizeWrapper.append(productCardSizeBtnWrapper);
    //LOOOOOOOOOOOOOOOOOOOOOOOOOOOOP SIZE

    product.Sizes.forEach((size) => {
      //product card size btn wrapper
      let sizeBtn = document.createElement("div");
      sizeBtn.classList.add("size-btn");
      productCardSizeBtnWrapper.append(sizeBtn);

      let sizeBtnText = document.createElement("p");

      if (size.SizesInStock < 1) {
        sizeBtn = "";
      } else {
        sizeBtnText.innerHTML = size.Size;
      }

      sizeBtn.append(sizeBtnText);
    });
    // price
    let productCardPrice = document.createElement("h2");
    productCardPrice.innerText = product.ProductPrice + "$";
    productCardSizeWrapper.append(productCardPrice);
    //Add to cart btn wrapper
    let productAddToCartBtnWrapper = document.createElement("div");
    productAddToCartBtnWrapper.classList.add("productAddToCart-btn-wrapper");
    productCardSizeWrapper.append(productAddToCartBtnWrapper);
    //Add to cart btn
    let productAddToCartBtn = document.createElement("div");
    productAddToCartBtn.classList.add("productAddToCart-btn");
    productAddToCartBtn.innerText = "Add to Cart";
    productAddToCartBtnWrapper.append(productAddToCartBtn);

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-one",
        prevEl: ".swiper-button-prev-one",
      },
    });

    console.log(swiper);
  }
}

// footer

export let navbar = document.getElementById("lastFooter").innerHTML = `

<div id="subContainer">
<div id="inputContainer">
<h6 id="subTitle">Subscribe to our newsletter!</h6>
<input type="email" name="newsletter" id="subscribe" placeholder="Email">
<button id="subBtn">Subscribe!</button>
<p id="subInfoResponse"></p>
<p id="subResponse"></p>
</div>

</div>

<div id="bottomContainer">
    <h6>Copyright &copy 2022 Sneakers.</h6>

    <h6>About us.</h6>

    <h6>Contact us.</h6>

   
</div>
`

// This function render out category products controlled by id from renderCategory function

let footerContainer = document.getElementById("footer");

async function renderProductInCategory(id) {
  footerContainer.innerHTML = "";
  let allProductsFromCategory = await getAllProductsByCategory(id);

  renderProductCard(allProductsFromCategory[0]);
  let categoryContainer = document.createElement("div");
  categoryContainer.classList.add("category-container");
  footerContainer.append(categoryContainer);

  let categorySwiperContainer = document.createElement("div");
  categorySwiperContainer.classList.add("swiper", "mySwiper2");
  categoryContainer.append(categorySwiperContainer);

  let categorySwiperWrapper = document.createElement("div");
  categorySwiperWrapper.classList.add("swiper-wrapper", "productInCategory");
  categorySwiperContainer.append(categorySwiperWrapper);

  allProductsFromCategory.forEach((product) => {
    let cateogryCard = document.createElement("div");
    cateogryCard.classList.add("swiper-slide", "swiper-footer-div");
    categorySwiperWrapper.append(cateogryCard);

    let categoryCardImg = document.createElement("img");
    categoryCardImg.src =
      "./ASSETS/PRODUCTS/" + product.Images[0].ImageSrc + ".jpeg";
    cateogryCard.append(categoryCardImg);

    cateogryCard.addEventListener("click", function () {
      console.log(product);
      renderProductCard(product);
      const nextTitle = product.ProductName;
      const nextState = { additionalInformation: "eeeh" };
      const nextURL =
        "./product.html?category=" + id + "?product=" + product.ProductId;
      window.history.pushState(nextState, nextTitle, nextURL);
    });
  });
  let categorySwiperBtnNext = document.createElement("div");
  categorySwiperBtnNext.classList.add(
    "swiper-button-next",
    "swiper-button-next-two"
  );
  categorySwiperContainer.append(categorySwiperBtnNext);

  let categorySwiperBtnPrev = document.createElement("div");
  categorySwiperBtnPrev.classList.add(
    "swiper-button-prev",
    "swiper-button-prev-two"
  );
  categorySwiperContainer.append(categorySwiperBtnPrev);

  let categorySwiperPagination = document.createElement("div");
  categorySwiperPagination.classList.add("swiper-pagination2");
  categorySwiperContainer.append(categorySwiperPagination);

  let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-two",
      prevEl: ".swiper-button-prev-two",
    },
  });
  console.log(swiper2);
}

async function newSubscriber() {
  let list = [];

  let subEmail = {};
  subEmail.email = document.getElementById("subscribe").value;
  let subResponse = document.getElementById("subResponse");

  list.push(subEmail);

  if (list[0].email === "") {
    document.getElementById("subInfoResponse").innerHTML =
      "Please insert your email.";
      
  } else {
    subResponse.style.display = "block";
    console.log(list);
    let action = "newSubscriber";
    let body = new FormData();
    body.append("subtonewsletter", JSON.stringify(list));
    
    let response = await makeRequest(
      `../api/receivers/subscriberReceiver.php?action=${action}`,
      "POST",
      body
      );
      
      console.log(response);
    
      document.getElementById("subInfoResponse").innerHTML = response;
    }
}

document.getElementById("subBtn").addEventListener("click", function () {
  newSubscriber();
});

// this function render logo for brands in dropdown

window.addEventListener("load", initSite);
