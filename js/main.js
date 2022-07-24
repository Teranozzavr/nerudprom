$(document).ready(function () {
    $(".scroll-downs").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top - 30 }, 1000);
    });

    $('.popup_callback').magnificPopup();
    $('.popup_video').magnificPopup();
    $('.menu-item-has-children').append('<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5.5 5L10 1" stroke-linecap="round" stroke-linejoin="round"/></svg>');


    if ($(window).width() > 1200) {
        $(".menu-item-has-children").hover(
            function () {
                $(this).addClass("open");
            }, function () {
                $(this).removeClass("open");
            }
        );
    } else {
        $(".menu-item-has-children").children('a').click(function (e) {
            e.preventDefault();
            $(this).siblings('.sub-menu').slideToggle(200);
            $(this).parent().toggleClass('open');
        });
    }
    if ($('section').hasClass('about')) {
        $(window).scroll(function () {
            var height = $(window).scrollTop();
            var topSection = $('.about').offset().top
            if (height > topSection) {
                $('header').addClass('header-fixed');
            } else {
                $('header').removeClass('header-fixed');
            }
        });
    }

    $('.btn_mobile').click(function () {
        $('body').toggleClass('open_menu');
    });
    var swiperPartner = new Swiper('.swiper-partner', {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next-partner',
            prevEl: '.swiper-button-prev-partner',
        },
        pagination: {
            el: '.swiper-pagination-partner'
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
        }
    });
    var swiperPesok = new Swiper('.swiper-pesok', {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next-pesok',
            prevEl: '.swiper-button-prev-pesok',
        },
        pagination: {
            el: '.swiper-pagination-pesok'
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        }
    });

    new WOW().init();

});