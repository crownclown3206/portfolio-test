$(function(){
  var headerHeight = $('#header').outerHeight();
  var urlHash = location.hash;
  if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
      var target = $(urlHash);
      var position = target.offset().top - headerHeight ;
      $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
  }
  $('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);
  });
});

$(function(){
  $('#header a[href^="#"]').click(function(){
    if ($('input[id="hamburger"]').prop('checked')) {
      $('input[id="hamburger"]').prop('checked', false);
    } else {
      $('input[id="hamburger"]').prop('checked', true);
    }
  });
});
