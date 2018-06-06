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
                ['Маркизы', '#markizy'],
                ['Перголы', '#pergoly'],
                ['Ткани', '#tkani'],
                ['Автоматика', '#automatic'],
                ['Услуги', '#service'],
                ['Контакты', '#contacts'],
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

            //flexslider
            $('.slhome,.slbusiness,.konstr').flexslider({
                animation: "fade",
                slideshowSpeed: 3000,
                animationSpeed: 1000,
                slideshow: true
            });

            $('.slhome .flex-control-nav').wrap('<div class="flex-control-nav-wrap-slhome"></div>');
            $('.flex-control-nav-wrap-slhome').prepend('<div class="title">для <span>Дома</span><br> и <span>Улицы</span></div>');
            var navTxt2 = ['- Ткани для обивки уличной мебели',
                '- Шторы для терасс, беседок и пергол',
                '- Мягкие сиденья для садовой мебели',
                '- Декоративные подушки различных форм'];
            $('.slhome .flex-control-nav a').each(function (index, elem) {
                $(elem).text(navTxt2[index]);
            });

            $('.slbusiness .flex-control-nav').wrap('<div class="flex-control-nav-wrap-slbusiness"></div>');
            $('.flex-control-nav-wrap-slbusiness').prepend('<div class="title">для <span>Кафе</span><br>и <span>Ресторанов</span></div>');
            var navTxt3 = ['- Обивочные ткани для мягкой мебели',
                '- Шторы в летние терассы',
                '- Ткани для гостиниц',
                '- Ткани для пляжных зон отдыха',
                '- Ткани для spa-зон и бассейнов',
                '- Профессиональные ткани для яхт и катеров'];
            $('.slbusiness .flex-control-nav a').each(function (index, elem) {
                $(elem).text(navTxt3[index]);
            });

            $('.konstr .flex-control-nav').wrap('<div class="flex-control-nav-wrap-konstr"></div>');
            $('.flex-control-nav-wrap-konstr').prepend('<div class="title">защита от<br><span>Солнца</span></div>');
            var navTxt4 = ['- Тканевые козырьки и навесы',
                '- Паруса для открытых терасс',
                '- Чехлы для квадроциклов и катеров'];
            $('.konstr .flex-control-nav a').each(function (index, elem) {
                $(elem).text(navTxt4[index]);
            });

            $('.automatic-flexslider').flexslider({
                animation: "slide",
                slideshowSpeed: 5000,
                animationSpeed: 1000,
                slideshow: true,
                controlNav: false,
                touch: true
            });
        });

    }());
});

$(window).load(function () {
    $('.wrapper').animate({opacity: 1}, 1000);
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


$(document).ready(function () {
    $(window).scroll(function () {
        // Высота проявления кнопки
        if ($(this).scrollTop() > 300) {
            $('#go-to-top').fadeIn();
        } else {
            $('#go-to-top').fadeOut();
        }
    });

    $('#go-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
            // Скорость подъема
        }, 1000);
        return false;
    });

});