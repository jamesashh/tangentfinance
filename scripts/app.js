$(document).ready(function(){
    $('.drop-down').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.drop-down i').toggleClass("active");
    });

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 400){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // owl carousel script
    
});

