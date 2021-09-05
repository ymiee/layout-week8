"use strict";

$(document).ready(function () {
  $('.toggleMenu').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('showMenu');
  });
});
var classSwiper = new Swiper(".classSwiper", {
  slidesPerView: 2,
  grid: {
    rows: 2
  },
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 1.2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    }
  }
});
var feebackSwiper = new Swiper(".feebackSwiper", {
  slidesPerView: 1,
  grid: {
    rows: 3
  },
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
