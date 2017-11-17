$(document).ready(function() {
  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });
});


$(document).ready(function(){
  $(".titleWrapper").addClass("ready");

$(".titleWrapper h1").each(function(){
  var fullString;
  var characters = jQuery(this).text().split("");

  $this = $(this);
  $this.empty();
  $.each(characters, function (i, el) {
    if(el == " "){
      el = "&nbsp;";
    }
    $this.append("<span>" + el + "</span");
  });

});

});
