$(document).ready(function () {
  $('.toggleMenu').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('showMenu');
  });
});

const classSwiper = new Swiper(".classSwiper", {
  slidesPerView: 1,
  grid: {
    rows: 3,
  },
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    }
  }
});

const feebackSwiper = new Swiper(".feebackSwiper", {
  slidesPerView: 1,
  grid: {
    rows: 3,
  },
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    }
  }
});