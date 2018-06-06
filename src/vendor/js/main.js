$(document).ready(function(){
    
    
        $("#menu_tg").unbind();
        $("#menu_tg").click(function(){
            /*if($(".menu").is(":visible")) {
                $(".menu").hide();
            } else {
                $(".menu").show();
                            
            }*/
            $(".menu").slideToggle();
            return false;
        });

        //$(".men_tog").click(function(){
          //  $(".top_menu").slideToggle();
            //return false;
        //});
        $("#men_tg").click(function(){
            $(".men_tog").slideToggle();
            return false;
        });
        $("#filt_tg").click(function(){
            $(".filter_l").slideToggle();
            return false;
        });
    
    
var
    bodyObj = $('body'),
    headerObj = $('.header_wrapper'),
    win$ = $(window),
    animateHeaderFrom = 10;

function animateHeader() {
    var scrollTopPos = win$.scrollTop();

    function checkWinScrollPosition() {
        if (scrollTopPos > animateHeaderFrom) {
            if (!headerObj.hasClass('h-animated')) {
                headerObj.addClass('h-animated');
                bodyObj.addClass('b-animated');
            }
        } else {
            if (headerObj.hasClass('h-animated')) {
                headerObj.removeClass('h-animated');
                bodyObj.removeClass('b-animated');
            }
        }
    }
    jQuery(window).on('scroll', function() {
        scrollTopPos = $(this).scrollTop();
        checkWinScrollPosition();
    });
    checkWinScrollPosition();
}
jQuery(document).ready(function() {
    animateHeader();
});
$('.hover_animated').each(function() {
    var data_animated = $(this).attr('data-animated');
    $(this).hover(function() {
        $(this).addClass('animated ' + data_animated);
    }, function() {
        $(this).removeClass('animated ' + data_animated);
    });
});
$('.button, #container form input, .file, .call_ma_h, .dop_ico, .btn_pop').each(function() {
    $(this).hover(function() {
        $(this).removeClass('fadeInUp').addClass('animated pulse');
    }, function() {
        $(this).removeClass('animated pulse');
    });
});

function PoltorAccordion() {
    $(".b2").each(function() {
        var he = ($(this).attr("data-height")) ? $(this).attr("data-height") : $($(this).attr("data-height-target")).height() + "px";
        var heig = $(this).find(".b2_inner").height() + "px";
        if (he > heig) {
            console.log($(this));
            $(this).css({
                'height': he,
                'transition': 'height 1s ease 0s',
                'overflow': 'hidden'
            });
            $(this).parent().find('.b3').css('display', 'block');
        } else {
            $(this).css({
                'height': "auto",
                'transition': 'height 1s ease 0s',
                'overflow': 'hidden'
            });
            $(this).parent().find('.b3').css('display', 'none');
        }
    });
    $('.slides_block').on('click', '.b3 > a', function(e) {
        e.preventDefault();
        if (!$(this).attr("data-name")) {
            var a_text = "Смотреть все";
        } else {
            var a_text = $(this).attr("data-name");
        }
        var state = $(this).data('state');
        switch (state) {
            case 1:
            case undefined:
                var this_he = $(this).parent().parent().find(".b2_inner").height();
                $(this).parent().parent().find(".b2").css("height", this_he);
                $(this).find('.show_span').text("Свернуть");
                $(this).addClass("active");
                $(this).data('state', 2);
                break;
            case 2:
                var min_he = ($(this).parent().parent().find(".b2").attr("data-height")) ? $(this).parent().parent().find(".b2").attr("data-height") : $($(this).parent().parent().find(".b2").attr("data-height-target")).height() + "px";
                $(this).parent().parent().find(".b2").css("height", min_he);
                $(this).find('.show_span').text(a_text);
                $(this).removeClass("active");
                $(this).data('state', 1);
                break;
        }
    });
}
PoltorAccordion();
$(".flipster").flipster({
    style: 'carousel',
    enableMousewheel: false,
    enableTouch: false,
    enableNavButtons: true
});
$('a.gal').each(function() {
    var gal = $(this).attr('rel');
    $('a[rel="' + gal + '"]').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        tLoading: '',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },
        callbacks: {
            beforeOpen: function() {
                this.wrap.addClass(this.st.el.attr('data-effect'));
            },
            removalDelay: 300,
            open: function() {
                $.magnificPopup.instance.next = function() {
                    $('.flipster').flipster('jump', 'right');
                    var self = this;
                    self.wrap.removeClass('opa mfp-s-ready zoomIn');
                    self.wrap.find('.mfp-content').removeClass('animated fadeInLeft').addClass('animated fadeOutLeft');
                    setTimeout(function() {
                        $.magnificPopup.proto.next.call(self);
                    }, 300);
                    setTimeout(function() {
                        self.wrap.find('.mfp-content').removeClass('animated fadeOutLeft').addClass('animated fadeInRight');
                    }, 300);
                }
                $.magnificPopup.instance.prev = function() {
                    $('.flipster').flipster('jump', 'left');
                    var self = this;
                    self.wrap.removeClass('opa mfp-s-ready zoomIn');
                    self.wrap.find('.mfp-content').removeClass('animated fadeInRight').addClass('animated fadeOutRight');
                    setTimeout(function() {
                        $.magnificPopup.proto.prev.call(self);
                    }, 300);
                    setTimeout(function() {
                        self.wrap.find('.mfp-content').removeClass('animated fadeOutRight').addClass('animated fadeInLeft');
                    }, 300);
                }
            },
            beforeClose: function() {
                var self = this;
                self.wrap.find('.mfp-content').addClass('opa animated zoomOut');
            }
        },
        gallery: {
            enabled: true,
            preload: [0, 2],
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            tPrev: 'Пред (Стрелочка влево)',
            tNext: 'След (Стрелочка вправо)',
            tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
        }
    });
});
$('.btn_pop').magnificPopup({
    removalDelay: 500,
    tClose: 'Закрыть (Esc)',
    tLoading: 'Загрузка...',
    callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});
var sections = $("section");
var navigation_links = $("nav a");
$(function() {
    $('#in a[href*=#]:not([href=#]), .sep_btn').click(function() {
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
$(".btn_pop, .sub_polt").click(function() {
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
$(function() {
    $('.file_inp').on('change', function() {
        var file_inp = $(this).val();
        file_inp = file_inp.replace(/C:\\fakepath\\/i, '');
        $(this).closest('.file').find('.smeta_placeh').text(file_inp);
    });
    $("input.submit, button.submit").click(function() {
        $(".site_page_polt").attr("value", window.location.protocol + "//" + window.location.host + window.location.pathname);
        var this_btn = $(this);
        var this_form = this_btn.parents("form");
        var this_success = this_form.find(".success_polt");
        var formData = new FormData(this_form[0]);
        $.ajax({
            type: "POST",
            url: "http://www.divany77.ru/send.php",
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function(data) {
                this_success.html(data);
            }
        });
        return false;
    });
});
$('input[type="text"]').focus(function() {
$(this).keypress(function() {
    $(this).removeClass('error_input');
});
});
});