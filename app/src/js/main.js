$(document).ready(function(){
      $('.main-slider').slick({
        centerMode: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        centerPadding: '60px',
        slidesToShow: 2,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false
          }
        },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }
        ]
      });

      $('.main-menu-btn').on('click', function() {
        $('.main-wrapper').slideUp('slow');
        $('.header-wrapper').slideDown('slow');
      });
    });
