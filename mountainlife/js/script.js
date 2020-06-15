$(function () {


    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    
    wow.init();


    function mouseEnter() {
        $(this).find("i").fadeIn("fast");
        $(this).find(".overlay").fadeIn("fast");

    }



    function mouseLeave() {
        $(this).find("i").fadeOut("fast");
        $(this).find(".overlay").fadeOut("fast");
    };

    $(".here").hover(mouseEnter, mouseLeave);


  $("header li").hover(function(){
     $(this).toggleClass("hamza"); 
      
  });

});
