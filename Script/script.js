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
  slidesToScroll: 3,
});
