

$(document).ready(function(){
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();

        if (scroll >=20) {
            $('.w3-top').removeClass('hidden');

        }
        else {
            $('.w3-top').addClass('hidden');
        }
    });

    $('.toggle-button').click(function(){
        $('.navbar-links').toggleClass('active');
        $('.toggle-button').toggleClass("bg-left")
    });
    
  });