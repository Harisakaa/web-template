const swiper2 = new Swiper(".mySwiper", {
    speed: 2000,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiper1 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable :true,
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

    breakpoints: {
      "@0.00": {
        slidesPerView: 2,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 5,
      },
    },
  });