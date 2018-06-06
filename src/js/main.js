$(document).ready(function () {

    $('.popup-good').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom',

        overflowY: 'scroll'
    });

    $('.btn_pop').magnificPopup({
        removalDelay: 500,
        tClose: 'Закрыть (Esc)',
        tLoading: 'Загрузка...',
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });
    var sections = $("section");
    var navigation_links = $("nav a");
    $(function () {
        $('#in a[href*=#]:not([href=#]), .sep_btn').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 59
                    }, 500);
                    return false;
                }
            }
        });
    });
    $(".btn_pop, .sub_polt").click(function () {
        var zakaz_sit_text = $(this).text();
        if (!$(this).attr('value')) {
            var zakaz_sit = $(this).text();
        } else {
            var zakaz_sit = $(this).attr('value');
        }
        if (!$(this).attr("data-name")) {
            var zakaz_sit_target = $(this).text();
        } else {
            var zakaz_sit_target = $(this).attr("data-name");
        }
        if ($(this).attr("data-textarea")) {
            $('.text_polt').css('display', 'none');
        } else {
            $('.text_polt').css('display', 'block');
        }
        if (!$(this).attr("data-text")) {
            var data_text = "";
            $('.data_text').css('display', 'none');
        } else {
            $('.data_text').css('display', 'block');
            var data_text = $(this).attr("data-text");
        }
        if (!$(this).attr("data-zakform")) {
            var data_zakform = "Введите свое имя и номер телефона, и наш менеджер свяжется с вами в ближайшее время! ";
        } else {
            var data_zakform = $(this).attr("data-zakform");
        }
        if (!$(this).attr("data-from")) {
            var zakaz_sit_from = zakaz_sit_text;
        } else {
            var zakaz_sit_from = $(this).attr("data-from");
        }

        if (!$(this).attr("data-id")) {
            var tov_id = $(this).attr("data-id")
        } else {
            var tov_id = $(this).attr("data-id");
        }
        if (!$(this).attr("data-cena")) {
            var data_cena = data_cena;
        } else {
            var data_cena = $(this).attr("data-cena");
        }


        $(".site_page_polt").attr("value", window.location.protocol + "//" + window.location.host + window.location.pathname);
        $(".zakaz_sit").text(zakaz_sit_target);
        $("#zakaz").attr("value", zakaz_sit_from);
        $(".data_text").html(data_text);
        $(".zak_form").html(data_zakform);
        $(".tov_id").attr("value", tov_id);
        $(".tov_cena").attr("value", data_cena);
        $(".tov_name").attr("value", zakaz_sit_target);
    });
    $(function () {
        $('.file_inp').on('change', function () {
            var file_inp = $(this).val();
            file_inp = file_inp.replace(/C:\\fakepath\\/i, '');
            $(this).closest('.file').find('.smeta_placeh').text(file_inp);
        });
        $("#contactform4").on('submit', function (e) {
            e.preventDefault();
            var $myForm = $('#contactform4');

            if (!$myForm[0].checkValidity()) {
               return false;
            }

            $(".site_page_polt").attr("value", window.location.protocol + "//" + window.location.host + window.location.pathname);
            var this_success = $myForm.find(".success_polt");
            var formData = new FormData($myForm[0]);
            $.ajax({
                type: "POST",
                url: "/send.php",
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    this_success.html(data);
                }
            });
            return false;
        });
    });
    $('input[type="text"]').focus(function () {
        $(this).keypress(function () {
            $(this).removeClass('error_input');
        });
    });

    $('[data-fancybox]').fancybox({
        fullScreen: {
            autoStart: true,
        },
        margin: [0, 0],
    });
});