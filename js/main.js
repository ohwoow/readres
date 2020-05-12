

$(document).ready(function () {
    $('.popular__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $('.slider__arrow-left'),
        nextArrow: $('.slider__arrow-right'),
        adaptiveHeight: true,
        speed: 700,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
        ]
      });

    $('.horror__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $('.horror__arrow-left'),
        nextArrow: $('.horror__arrow-right'),

        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
        ]
      });

      $('.audiobook__popular-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $('.audiobook__popular-arrow-prev'),
        nextArrow: $('.audiobook__popular-arrow-right'),
         responsive: [
          {
            breakpoint: 1110,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
        ]
      });

      $('.new__popular-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $('.new__arrow-prev'),
        nextArrow: $('.new__arrow-right'),
         responsive: [
          {
            breakpoint: 1110,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
        ]
      });

      $('.for-you__popular-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $('.for-you__arrow-prev'),
        nextArrow: $('.for-you__arrow-next'),
         responsive: [
          {
            breakpoint: 1110,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
        ]
      });


      $('.header-menu__burger').on('click', function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $('.header-nav__list').toggleClass('active');
    });
});