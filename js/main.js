$(function($) {

  "use strict";

  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

/*=========================== preloader ===========================*/

//smooth scrool
   // Add scrollspy to <body>
  $('body').scrollspy({target: ".hero_menu_sec", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $(".inside_heros_nav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });


var owls = $("#blog_slider_owl");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        items: 3,
        smartSpeed:1400,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots:false,
        nav:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1100: {
                items: 3,
                loop: true
            }
        },
         navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]

    });




});

