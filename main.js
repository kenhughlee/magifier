

$(document).ready(function() {

var fontS;
$('div, span, h2, h3, h4, h5, h6, p, a, u, img').hover( function() {

    fontS = $(this).css('font-size');
    console.log('f', fontS);
    $(this).css('font-size', 30);
  }, function() {
    $(this).css('font-size', '');
  });
});
