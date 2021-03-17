$(function() {
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

   $(window).on('resize', function() {
       $('.service-section-carousel').slick('resize');
   });

   
   $('.featured-on-section-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: false,
        responsive: [

            {
                breakpoint: 1220,
                settings: 'unslick'
            },
            {
                breakpoint: 1085,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll:4,

                }
            },
            {
                breakpoint: 797,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },{
                breakpoint: 515,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            }
        ]

   });

   $(window).on('resize', function(){
        $('.featured-on-section-carousel').slick('resize');


   });

   $('.team-box-container-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: false,
        responsive:[
            {
            breakpoint: 1220,
            settings: 'unslick',
            }
        ]

   });
   $(window).on('resize', function(){
    $('.team-box-container-carousel').slick('resize');

   });
   

});

$(".fancybox").fancybox({
    fitToView   : false,
    height      : 'auto',
    autoSize    : false,
    helpers : {
          overlay : {
              locked: false
          }
    }
});
