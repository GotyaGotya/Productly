$(function () {

  $('.blog__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
  });

  $(document).ready(function () {
    $('.menu__burger').click(function () {
      $('.menu__list').toggleClass('menu__list--active'),
        $('.menu__burger').toggleClass('menu__burger--active');
    });
  });

});