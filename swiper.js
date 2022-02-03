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

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
 /*  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }, */
  navigation: {
    nextEl: ".swiper-button-next-two",
    prevEl: ".swiper-button-prev-two",
  },
});

console.log(swiper2)