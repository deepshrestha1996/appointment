$(document).ready(function(){
    $('.center-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        responsive: [
           {
              breakpoint: 1200,
              settings: "unslick"
           }
        ]
     });

});
