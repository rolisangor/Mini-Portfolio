$(document).ready(function(){
      $('.main-slider').slick({
        centerMode: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        centerPadding: '60px',
        slidesToShow: 2,
        responsive: [
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
              slidesToShow: 1
            }
          }
        ]
      });
    });
