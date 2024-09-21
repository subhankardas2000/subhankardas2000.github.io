(function ($) {
    "use strict";
    
    // JS Index
    //--------------------------------------------------
    // 1. sticky menu
    // 2. background image
    // 3. tilt js
    // 4. mobile-menu(mean-menu)
    // 5. preloader
    // 6. One Page Nav
    // 7. mobile-menu-sidebar
    // 8. testimonial active
    // 9. brand active
    // 10.blog active
    // 11. counter js
    // 12. Circular Bars - Knob
    // 13. aos js
    // 14. Isotope js
    // 15. map js
    // 16. Animate the scroll to top
    //-------------------------------------------------

    // 1. sticky menu
    // ---------------------------------------------------------------------------
    var wind = $(window);
    var sticky = $("#header-sticky");
    wind.on('scroll', function () {
        var scroll = $(wind).scrollTop();
        if (scroll < 2) {
            sticky.removeClass("sticky-menu");
        } else {
            $("#header-sticky").addClass("sticky-menu");
        }
    });



    // 2. background image
    //---------------------------------------------------------------------------
    $("[data-background]").each(function (){
        $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
    });





    // 4. mobile-menu(mean-menu)
    //---------------------------------------------------------------------------
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
    });



    // 5. preloader
    //---------------------------------------------------------------------------
    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
    


    // 6. One Page Nav
    //---------------------------------------------------------------------------
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });



    // 7. mobile-menu-sidebar
    //---------------------------------------------------------------------------
    $(".mobile-menubar").on("click", function(){
        $(".side-mobile-menu").addClass('open-menubar');
        $(".body-overlay").addClass("opened");
    });
    $(".close-icon").click(function(){
        $(".side-mobile-menu").removeClass('open-menubar');
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function () {
		$(".side-mobile-menu").removeClass('open-menubar');
		$(".body-overlay").removeClass("opened");
	});




    // 8. testimonial active
    //---------------------------------------------------------------------------
    $('.testimonial-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '30px',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    
    // 9. brand active
   //---------------------------------------------------------------------------
    $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
            // You can unstick at a given breakpoint now by adding:
            // settings: "unstick"
            // instead of a settings object
        ]
    });




    // 10.blog active
    //---------------------------------------------------------------------------
    $('.blog-active').slick({
        dots: false,
        arrows: true,
        prevArrow:'<b><i class="l-a fas fa-angle-left"></i></b>',
        nextArrow:'<b><i class="r-a fas fa-angle-right"></i></b>',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    // 11. counter js
    // ---------------------------------------------------------------------------
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });




    // 12. Circular Bars - Knob
    // ---------------------------------------------------------------------------

     if (typeof ($.fn.knob) != 'undefined') {

        $('.knob').each(function () {
    
          var $this = $(this),
    
            knobVal = $this.attr('data-rel');
    
    
    
          $this.knob({
    
            'draw': function () {
    
              $(this.i).val(this.cv + '%');
    
            }
    
          });
    
    
          $this.appear(function () {
    
            $({
    
              value: 0
    
            }).animate({
    
              value: knobVal
    
            }, {
    
              duration: 2000,
    
              easing: 'swing',
    
              step: function () {
    
                $this.val(Math.ceil(this.value)).trigger('change');
    
              }
    
            });
    
          }, {
    
            accX: 0,
    
            accY: -150
    
          });
    
        });
    
    }



    // 13. aos js
    // ---------------------------------------------------------------------------
    AOS.init();


    // 14. Isotope js
    // ---------------------------------------------------------------------------
    $('.grid').imagesLoaded( function() {
        var grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
            }
        });

        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({ filter: filterValue });
        });
    });
    //for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });




    // 15. map js
    // ---------------------------------------------------------------------------
    var map = L.map('mapwrapper').setView([-37.817160, 144.955937], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    var greenIcon = L.icon({
        iconUrl: "images/icon/map-marker.png",

        iconSize:     [78, 78], // size of the icon
        // shadowUrl: 'my-icon-shadow.png',
        // shadowSize: [72, 72],
    });

    L.marker([-37.817160, 144.955937], {icon: greenIcon}).addTo(map);



    // 16. Animate the scroll to top
    // --------------------------------------------------------------------------
    // Show or hide the sticky footer button
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 900){
            $('#scroll').fadeIn(1200);
        } else{
            $('#scroll').fadeOut(1200);
        }
    });

    $('#scroll').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });



  

})(jQuery);	  