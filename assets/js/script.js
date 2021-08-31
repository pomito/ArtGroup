var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 3,
      spaceBetweenSlides: 40,
    },
    1440: {
      slidesPerView: 4,
      spaceBetweenSlides: 40,
    },
  },
});
