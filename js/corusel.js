$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        700:{
            items:2,
            nav:false
        },
        1300:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
});