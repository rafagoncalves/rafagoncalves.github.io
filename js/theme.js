// js Document

    // Project:        Deman - Personal portfolio HTML Template.
    // Version:        1.0
    // Last change:    26/04/2019.


(function($) {
    "use strict";
    
    
    $(document).on ('ready', function (){
        
        // -------------------- Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.theme-main-header'),
          scroll = $(window).scrollTop();
          if (scroll >= 80) sticky.addClass('sticky');
          else sticky.removeClass('sticky');

        });



        // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });
        


        // -------------------- From Bottom to Top Button
        //Check to see if the window is top if not then display button
        $(window).on('scroll', function (){
          if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });


        //---------------------- Click event to scroll to top
        $('.scroll-top').on('click', function() {
          $('html, body').animate({scrollTop : 0},1500);
          return false;
        });


        $('#menu-main-button').on('click', function(e) {
          $(this).toggleClass('active');
          $('#main-menu').toggleClass('active');
        });


        // ------------------------ Aside Menu
        if($(".sidebar-nav").length) {
          $('.sidebar-nav a').on('click', function(){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: (target.offset().top - 0)
                }, 1000, "easeOutCubic");
                return false;
              }
            }
          });
        }

        // Closes responsive menu when a scroll trigger link is clicked
        $('.sidebar-nav .nav-link').on('click', function(){
          $('#main-menu,#menu-main-button').removeClass('active');
        });


        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
          target: 'body',
          offset: 20
        });


        // ----------------------- Progress Bar
        $('.progress-bar').each(function(){
            var width = $(this).data('percent');
            $(this).css({'transition': 'width 3s'});
            $(this).appear(function() {
                console.log('hello');
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50,
                });
            });
        });
          



          // ------------------------------ Client Slider 
          var cliSlider = $ (".client-slider");
            if(cliSlider.length) {
                cliSlider.owlCarousel({
                  loop:true,
                  nav:false,
                  dots:true,
                  autoplay:true,
                  autoplayTimeout:8000,
                  smartSpeed:1000,
                  autoplayHoverPause:true,
                  lazyLoad:true,
                  singleItem:true,
                  items:1
              });
            }



            // ------------------------------ Client Slider 
            var blgSlider = $ (".blog-slider");
              if(blgSlider.length) {
                  blgSlider.owlCarousel({
                    loop:true,
                    nav:false,
                    dots:false,
                    autoplay:true,
                    margin:30,
                    autoplayTimeout:4000,
                    autoplaySpeed:1000,
                    lazyLoad:true,
                    singleItem:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        575:{
                            items:2
                        },
                        992:{
                            items:3
                        }
                    }
                });
            }



            // ------------------------------ Client Slider 
            var pkgSlider = $ (".pricing-slider");
              if(pkgSlider.length) {
                  pkgSlider.owlCarousel({
                    loop:true,
                    nav:false,
                    dots:false,
                    autoplay:false,
                    smartSpeed:1000,
                    lazyLoad:true,
                    singleItem:true,
                    center:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        575:{
                            items:2
                        },
                        992:{
                            items:3
                        }
                    }
                });
              }




        // --------------------------------- Contact Form
        // init the validator
        // validator files are included in the download package
        // otherwise download from http://1000hz.github.io/bootstrap-validator
        if($("#contact-form").length) {
          $('#contact-form').validator();
          // when the form is submitted
          $('#contact-form').on('submit', function (e) {
              // if the validator does not prevent form submit
              if (!e.isDefaultPrevented()) {
                  var url = "inc/contact.php";
                  // POST values in the background the the script URL
                  $.ajax({
                      type: "POST",
                      url: url,
                      data: $(this).serialize(),
                      success: function (data)
                      {
                          // data = JSON object that contact.php returns
                          // we recieve the type of the message: success x danger and apply it to the
                          var messageAlert = 'alert-' + data.type;
                          var messageText = data.message;
                          // let's compose Bootstrap alert box HTML
                          var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                          // If we have messageAlert and messageText
                          if (messageAlert && messageText) {
                              // inject the alert to .messages div in our form
                              $('#contact-form').find('.messages').html(alertBox);
                              // empty the form
                              $('#contact-form')[0].reset();
                          }
                      }
                  });
                  return false;
              }
          });
        }

        
    });

    
    $(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});


          // ------------------------------- AOS Animation 
          AOS.init({
            duration: 1000,
            mirror: true
          });


          // ------------------------- init cubeportfolio
          if($(".cube-port").length) {
            $('#js-grid-full-width').cubeportfolio({
                filters: '#js-filters-full-width',
                layoutMode: 'mosaic',
                sortByDimension: true,
                defaultFilter: '*',
                animationType: 'fadeOutTop',
                gapHorizontal: 0,
                gapVertical: 0,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                    width: 1500,
                    cols: 5,
                }, {
                    width: 1100,
                    cols: 4,
                }, {
                    width: 800,
                    cols: 3,
                }, {
                    width: 480,
                    cols: 2,
                    options: {
                        caption: '',
                        gapHorizontal: 10,
                        gapVertical: 10,
                    }
                }],
                caption: 'zoom',
                displayType: 'fadeIn',
                displayTypeSpeed: 100,

                // lightbox
                lightboxDelegate: '.cbp-lightbox',
                lightboxGallery: true,
                lightboxTitleSrc: 'data-title',
                lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

                plugins: {
                    loadMore: {
                        element: '#js-loadMore-full-width',
                        action: 'auto',
                        loadItems: 3,
                    }
                },
            });(jQuery, window, document);
          }


    });
    
})(jQuery);

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });