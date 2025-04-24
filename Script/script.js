// AOS animation
AOS.init();

// Counter-Up Plug-ins
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

// Slick Slider - Colors
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // dots: true,
        arrows: true,
        prevArrow:
          '<i class="fa-solid colors-larr colors-arrows fa-chevron-left"></i>',
        nextArrow:
          '<i class="fa-solid colors-rarr colors-arrows fa-chevron-right"></i>',
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
});

// Slick Slider - Testimonials
$(".testimonials-slide").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "100px",
  // arrows: false,
  prevArrow: '<i class="fa-solid larr arrows fa-arrow-left"></i>',
  nextArrow: '<i class="fa-solid rarr arrows fa-arrow-right"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
