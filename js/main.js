$(function() {
    $('ul.jsnav a').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        event.preventDefault();
    });
});

$(window).scroll(function(){
  if($(window).scrollTop() > 620){
      $("#follownav").slideDown("fast");
	    $('#follownav').removeClass('hide').addClass('show');	  
  }
  if($(window).scrollTop() > 40) {
      $("#dreams").fadeOut();
  }
});
$(window).scroll(function(){
  if($(window).scrollTop() < 620){
      $("#follownav").slideUp("fast");
  }
  if($(window).scrollTop() < 40) {
      $("#dreams").fadeIn();
  }
});