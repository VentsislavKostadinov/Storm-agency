$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if (scroll > 520) {
            $(".navbar").css({'background' : ' #343A40', 'opacity' : '0.5'});

        }

        else{
            $(".navbar").css({'background' : '#343A40', 'opacity' : '1.0'});
        }
    })
});