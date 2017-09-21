

$(document).ready(function() {

var fontS;
// var imgS;


$('body').on('keydown', function(e) {
  if (e.keyCode === 88) {
    // hover(handlerIn, handlerOut)
    $('div, span, h2, h3, h4, h5, h6, p, a, u').hover( function() {
        // imgS = $(this).css('height', 'width');
        // console.log(imgS);
          console.log('what is e.which', e.which);
          fontS = $(this).css('font-size');
          console.log('f', fontS);
          $(this).css('font-size', 30);

        // $(this).css({'height': '100.1%', 'width': '100.1%'});
      }, function() {
        $(this).css('font-size', '');
        // $(this).css({'height': '', 'width': ''});
        $('body').on('keydown', function(e) {
          if (e.which !== 88) {
            $('div, span, h2, h3, h4, h5, h6, p, a, u').off();
          }
        });
      });
    }
});
// $('div, span, h2, h3, h4, h5, h6, p, a, u, img').hover( function() {
//     imgS = $(this).css('height', 'width');
//     console.log(imgS);
//     fontS = $(this).css('font-size');
//     console.log('f', fontS);
//     $(this).css('font-size', 30);
//     $(this).css({'height': '100.1%', 'width': '100.1%'});
//   }, function() {
//     $(this).css('font-size', '');
//     $(this).css({'height': '', 'width': ''});
//   });
});
