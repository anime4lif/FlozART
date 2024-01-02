
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      "images/pinterest/pin_five.jpg",
       "images/pin/pin4.jpg",
       "images/pin/pin12.jpg",
       "images/pinterest/pin_six.jpg"
     
     
    ],  {duration: 2000, fade: 750});
    
  })(window.jQuery);


