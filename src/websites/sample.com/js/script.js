jQuery(document).ready(function () {
    (function () {
        // store the slider in a local variable
        var $window = $(window),
            flexslider = {vars: {}};

        $window.load(function () {

            $('.mainsl').flexslider({
                animation: "fade",
                slideshowSpeed: 5000,
                animationSpeed: 1500,
                slideshow: true
            });

            $('.mainsl .flex-control-nav').wrap('<div class="flex-control-nav-wrap"></div>');

            var navTxt = [
                ['Item A', '#about'],
                ['Item B', '#services'],
                ['Item C', '#contacts'],
            ];

            $('.mainsl .flex-control-nav a').each(function (index, elem) {
                $(elem).text(navTxt[index][0]);

                if (typeof navTxt[index][1] != undefined)
                    $(elem).attr('href', navTxt[index][1]);
            });

            $('.flex-control-nav').on('click', 'a', function (event) {
                event.preventDefault();

                var href = $(this).attr('href');
                if (typeof href != 'undefined' && href != '') {
                    window.location = href;
                }
            });

        });

    }());
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 8,
        autoplay: true,
        autoplayHoverPause: true
    })
});

