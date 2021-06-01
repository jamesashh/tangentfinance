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
    });
});

