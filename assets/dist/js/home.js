$(document).ready(function(){
    //Tabs
    $('.filter-items').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.filter-items').removeClass('active');
        $('.tab-item').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    $('.filter').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.filter').removeClass('active');
        $('.tab-num').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    $('.jobs__wrapper').mCustomScrollbar();

    // sliders
    $('.socials').slick({
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },{
            breakpoint: 480,
            settings: {
                infinite: false,
                slidesToShow: 2,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },]
    });
    $('.sliderWrap').slick({
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
            }
        },{
            breakpoint: 480,
            settings: {
                infinite: false,
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        },]
    });
    $('.section9__slider').slick({
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },{
            breakpoint: 480,
            settings: {
                infinite: false,
                slidesToShow: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },]
    });
    $('.reviews__slider').slick({
        responsive: [{       
            breakpoint: 99999,         
            settings: {
                slidesToShow: 3,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },{
            breakpoint: 480,
            settings: {
                infinite: false,
                slidesToShow: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },]
    });
    $('.ourTeachers').slick({
        responsive: [{
            breakpoint: 99999,
            settings: {
                slidesToShow: 4,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
            }
        },{
            breakpoint: 480,
            settings: "unslick"
        },]
    });
    $('.imagesSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false
    });
    $('.deskBlk__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                dots: false,
                arrows: false,
                speed: 500,
                fade: true,
                cssEase: 'linear',
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: false,
                  dots: false,
                  arrows: true,
                  nextArrow: '<button class="slick-arrow next"><i class="icon-icon24"></i></button>',
                  prevArrow: '<button class="slick-arrow prev"><i class="icon-icon23"></i></button>',
                  speed: 500,
                  fade: true,
                  cssEase: 'linear',
                }
              },
        ]
    });

    $('.deskBlk__customNav a').on( "click", function() {
        $('.deskBlk__customNav a').removeClass('active');
        $(this).addClass('active');
        var slideIndex = $(this).index();
        $('.deskBlk__slider').slick('slickGoTo', slideIndex);
    });
    $('.deskBlk__slider .slick-dots button').on( "click", function() {
        $('.deskBlk__customNav a').removeClass('active');
        var slideIndex = $(this).text();
        $('.deskBlk__customNav a').eq(slideIndex - 1).addClass('active');
    });

    if ($(window).width() > 1024) {
        var scrollCount = null;
        var scroll= null;
        $('.deskBlk__slider').on('wheel', (function(e) {
            e.preventDefault();
          
            scroll = setTimeout(function(){scrollCount=0;}, 200);
            if(scrollCount) return 0;
            scrollCount=1;
          
            if (e.originalEvent.deltaY < 0) {
              $(this).slick('slickPrev');
            } else {
              $(this).slick('slickNext');
            }
        }));
    }
    $('.deskBlk__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.deskBlk__customNav a').removeClass('active');
        var slideIndex = nextSlide;
        $('.deskBlk__customNav a').eq(slideIndex).addClass('active');
    });
    
    
    //scroll to id
    function handler(event) {
        // var hash = event.target.hash;
        var hash = $(this).attr("href");
        if (hash) {
          event.preventDefault();
          if ($(hash).length) {
            var offset = $(hash).offset().top - 100;
            $('html, body').stop().animate({scrollTop: offset},'slow');
          }else{
          }
        }
        $('#mainMenu').removeClass('show');
    }
    $('#mainMenu a').on( "click", handler );
    
    

    //mobile accordion
    $('.mobileAccord .icon').on('click', function(){
        $(this).parent().toggleClass('active');
    });

    //desktop accordions
    $('.accordion .title').on('click', function(){
        $(this).parent().toggleClass('active');
    });

    //mobile showMore
    $('.showMore').on('click', function(){
        $(this).parent().addClass('active');
        $(this).hide();
    });

    //popups
    $('.open-requestCall').on("click",function(){
        $('.overlay-requestCall').addClass('active');
    });
    $('.overlay-requestCall .closeBtn, .overlay-requestCall .close').on("click",function(){
        $('.overlay-requestCall').removeClass('active');
    });

    $('.open-thanksMsg').on("click",function(){
        $('.overlay-thanksMsg').addClass('active');
    });
    $('.overlay-thanksMsg .closeBtn, .overlay-thanksMsg .close').on("click",function(){
        $('.overlay-thanksMsg').removeClass('active');
    });

    //open full review
    $(".open-review").on('click', function(){
        var review = $(this).parent().find('.fullReview').html();
        $('.review__content').html(review);
        $('.overlay-review').addClass('active');
    });
    $('.overlay-review .closeBtn, .overlay-review .close').on("click",function(){
        $('.overlay-review').removeClass('active');
    });

    
    

});