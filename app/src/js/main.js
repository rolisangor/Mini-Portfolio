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





















      $(function(){
  // Ищем все элементы с class="dial"
  let dials = $(".dial");
  // Перебираем все .dial и пихуем туда canvas с графиком.
  for (let i=0; i < dials.length; i++){
    let width = (typeof $(dials[i]).attr("data-width") != 'undefined') ? Math.round($(dials[i]).attr("data-width")) : 80;
    let procent = (Number($(dials[i]).html()) > 0 && Number($(dials[i]).html()) < 100) ? Math.round(Number($(dials[i]).html()) * 10)/10 : 0;
    let lineWidth = (typeof $(dials[i]).attr("data-lineWidth") != 'undefined') ? Number($(dials[i]).attr("data-lineWidth")) : width / 10;
    let size = width+lineWidth;
    let lineRound = (typeof $(dials[i]).attr("data-lineRound") != 'undefined') ? true : false;
    let borderColor = $(dials[i]).css("border-color");
    let color = $(dials[i]).css("color");
    // Меняем размер .dial в зависимости от data-width="80"
    // Устанавливаем размер шрифта так что бы он вмещался в круг не задевая border
    $(dials[i]).css({"width": size + 'px', "height": size + 'px', "font-size": Math.floor((width-lineWidth) / 4) + 'px'});
    // Вставляем canvas такого же размера что и родитель.
    $(dials[i]).html('<canvas id="dial' + i + '" width="' + size + '" height="' + size + '"></canvas><p>' + procent + '%</p>');
    // Выравниваем текст по вертикали
    $("p", dials[i]).css({"line-height": size + 'px'});
    let canvas = document.getElementById("dial" + i);
    let context = canvas.getContext("2d");
    // считаем по формуле радианы
    let radian = 2*Math.PI*procent/100;
    // рисуем круг для фона
    context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, 0, 2*Math.PI, false);
    context.lineWidth = lineWidth;
    context.strokeStyle = borderColor;
    context.stroke();
    context.beginPath();
    // рисуем круг с процентами
    context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, 1.5 * Math.PI, radian+1.5 * Math.PI, false);
    context.strokeStyle = color;
    // Можно скруглить концы отрезка если передан параметр data-lineRound
    if (lineRound == true && lineWidth < width) context.lineCap = "round";
    context.stroke();
  }
});

    });
