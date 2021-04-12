$(function () {

    // slick-carousal js
    $('.service-section-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1220,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function () {
        $('.service-section-carousel').slick('resize');
    });


    $('.featured-on-section-carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 5,
        mobileFirst: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1085,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,

                }
            },
            {
                breakpoint: 797,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            }, {
                breakpoint: 515,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]

    });



    $('.team-box-container-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1170,
                settings: 'unslick',
            }
        ]

    });
    $(window).on('resize', function () {
        $('.team-box-container-carousel').slick('resize');

    });

    $('.blog-post-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1170,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function () {
        $('.blog-post-carousel').slick('resize');
    });

    //testimonial section carousel
    var $slider = $('.quotes-carousel');

    if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slide-count-wrapper');

        var updateSliderCounter = function (slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + "/" + slidesCount)
        };
        $slider.on('init', function (event, slick) {
            $slider.append(sliderCounter);
            updateSliderCounter(slick);
        });
        $slider.on("afterChange", function (event, slick, currentSlide) {

            updateSliderCounter(slick, currentSlide);
        });
        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: '<div class="slick-costom-arrow slick-costom-arrow-right"><img src="./images/icons-svg/sharp-right.svg"></div>',
            prevArrow: '<div class="slick-costom-arrow slick-costom-arrow-left"><img src="./images/icons-svg/sharp-left.svg"></div>'
        });
    }

    /////////////////////isotope js//////////////////
    $('.portfolio-container').isotope({

        itemSelector: ".portfolio-box-item-wrapper",
    });

    $('.portfolio-navbar').on("click", "li", function () {
        var filterValue = $(this).attr("data-filter");
        $(".portfolio-container").isotope({ filter: filterValue });
        $(".portfolio-navbar li").removeClass("portfolio-navbar-active");
        $(this).addClass("portfolio-navbar-active");
    });



    ////////////////////counter section js////////////////////
    var a = 0;
    $(window).scroll(function () {

        var oTop = $('.counter-item').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.increment-counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }

    });

    // $('.inner-fancybox').fancybox({
    //     beforeShow : function(){
    //         this.title = this.title + " - " +$(this.element).data("caption");
    //     }
    // });

    //////////////scroll to top function///////////////////
    var scrollBtn = document.getElementById("scroll-btn");
    var rootElement = document.documentElement

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }

    function goToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    document.getElementById("scroll-btn").addEventListener("click", goToTop, true);

    /////////////////hamburger animation//////////////////////

    $(document).ready(function () {
        $(".nav-hamburger").click(function () {
            $(this).toggleClass('open-hamburger');
        });
    });

    //////////////////mbl header close//////////////

    var mblCloseBtn = document.getElementById("mbl-close-btn");
    var mblHeaderMain = document.getElementById("mbl-header-main");
    var navHam = document.getElementById('nav-hamburger');
    function closeMblMenu() {
        if (mblHeaderMain.style.display = 'block') {
            mblHeaderMain.style.display = 'none';
        }
        // navHam.style.display='block';

    }
    function openMblMenu() {
        if (mblHeaderMain.style.display = 'none') {
            mblHeaderMain.style.display = 'block';
        }
        // navHam.style.display='none';


    }
    // mblCloseBtn.addEventListener('click', closeMblMenu, true);


    //////////////////mbl header open///////////////


    var toggle = 0;
    $(navHam).click(function () {

        if (toggle == 1) {
            // navHam.addEventListener('click', closeMblMenu);

            if (mblHeaderMain.style.display = 'block') {
                mblHeaderMain.style.display = 'none';
            }
            toggle = 0;



        }
        else {

            if (mblHeaderMain.style.display = 'none') {
                mblHeaderMain.style.display = 'block';
            }

            // navHam.addEventListener('click', openMblMenu);
            toggle = 1;
        }
    })
    ////////////////////////////sticky main header////////////////////
    function relocateHeader() {
        var windowTop = $(window).scrollTop();
        var div_top = $('.header-offset').offset().top;
        if (windowTop > div_top) {
            $('.header-main').addClass('stick-header-main');

        } else {
            $('.header-main').removeClass('stick-header-main');

        }
    }
    // var headerMain= $('.header-main');

    
    // function stickyFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         headerMain[0].style.position = "fixed";
    //         headerMain[0].style.top='0';
    //     } 
    // }
    $(window).scroll(relocateHeader);
    relocateHeader();
    // window.onscroll = function () { relocateHeader() };
    // window.onscroll = function () { stickyFunction() };

});



