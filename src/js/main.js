$(document).ready(function () {
    /**
     *  place here some code common for all websites
     *
     *  i.e.: popup open, cart/catalogue routines etc.
     *
     *
     **/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#go-to-top').fadeIn();
        } else {
            $('#go-to-top').fadeOut();
        }
    });

    $('#go-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

$(window).load(function () {
    $('.wrapper').animate({opacity: 1}, 1000);
});
