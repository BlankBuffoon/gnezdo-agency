import * as jQueryFunc from "./modules/jQuery.js";
import * as appFunc from "./modules/isWebp.js";
import * as jQueryInputMask from "./modules/jquery.inputmask.min.js";
import * as jQueryMarquee from "./modules/jquery.marquee.min.js"
import * as actionAnimations from "./modules/actionAnimations.js";
import * as detailedAnimations from "./modules/detailedAnimations.js";
import anime from "./animejs.js"

// JQ
jQueryFunc.jQuery();

// WebP Support
appFunc.isWebP();

// InputMask
jQueryInputMask.jQueryInputMask();

// Бегущая строка
jQueryMarquee.jQueryMarquee();

// Анимации
actionAnimations.atcionAnims();
detailedAnimations.detailedAnims();



// LazyLoad Function

function lazyLoadVideo(video) {
    const source = video.querySelector('source');
    const src = source.getAttribute('data-src');
    source.setAttribute('src', src);
    source.removeAttribute('data-src');
    video.addEventListener('loadeddata', function() {
        video.width = this.videoWidth;
        video.height = this.videoHeight;
    });
    
    video.load();
}



// Слайдер главной страницы. 2 блок

$(function() {
    const actionSlider = new Swiper('.action', {
        loop: true,
        shortSwipes: true,

        effect: "creative",
        creativeEffect: {
            prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
            },
            next: {
            translate: ["100%", 0, 0],
            },
        },

        autoplay: {
            delay: 6000,
        },
    })
});



// Слайдер на главной. Видео

let slidenames = [];
$('.videos.swiper .swiper-slide').each(function() {
    slidenames.push($(this).attr('data-nav-link'));
});

$(function() {
    const videoSlider = new Swiper('.videos', {
        loop: true,
        effect: "fade",

        fadeEffect: {
            crossFade: true
          },
        
        pagination: {
            el: ".videos__nav",
            clickable: true,
            bulletClass: 'videos__nav--link',
            bulletActiveClass: 'active',
            renderBullet: function(index, className) {
                return '<span class="' + className + '"><span class="arrow">→</span>' + slidenames[index] + "</span>";
            },
        },

        autoplay: {
            delay: 5000,
        },

        on: {
            init: function () {
                this.slides.forEach(element => {
                    let video = element.querySelector('video');

                    if (video.classList.contains('lazyload') && screen.width > 768) {
                        lazyLoadVideo(video);
                        video.classList.remove('lazyload');
                    }
                });
            }
        },
    });

    let index = 0;
    let prevIndex = 0;
    let selector = "";
    let video;

    videoSlider.on('slideChange', function () {
        index = videoSlider.realIndex;
        
        selector = "video-" + prevIndex;
        video = document.getElementById(selector);
        video.pause();
        video.currentTime = 0;
            
        selector = "video-" + index;
        video = document.getElementById(selector);

        if (video.classList.contains('lazyload') && screen.width > 768) {
            lazyLoadVideo(video);
            video.classList.remove('lazyload');
        }
        
        video.play()

        prevIndex = index;
    })
});



// Слайдер на главной. Логотипы клиентов

$(function() {
    const clientsSlider = new Swiper('.ourclients', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        shortSwipes: true,

        breakpoints: {
            1920: {
                slidesPerView: 8,
            },

            768: {
                slidesPerView: 5,
            },

            360: {
                slidesPerView: 4,
            }
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: 'active',
        },

        autoplay: {
            delay: 3000,
        },
    })
})



// Страница "О нас". Бегущие строки

$(function() {
    $('.introdusing__marquee.left').marquee({
        duplicated: true,
        direction: "left",
        gap: 10,
        startVisible: true,
        delayBeforeStart: 0,
        speed: 80,
    });
    $('.introdusing__marquee.right').marquee({
        duplicated: true,
        direction: "right",
        gap: 10,
        startVisible: true,
        delayBeforeStart: 0,
        speed: 80,
    });
})



// Страница "О нас". Слайдер отзывов

$(function () {
    const feedbackSlider = new Swiper('.feedback__swiper', {
        loop: true,
        shortSwipes: true,
        speed: 2000,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: 'active',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 3000,
        },
    })
})



// Страница "О нас". Паралакс эффект фона в блоке интро

let bg = document.querySelectorAll('.intro-paralax');

if (bg.length != 0) {
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg[0].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        bg[1].style.transform = 'translate(-' + x * 35 + 'px, -' + y * 35 + 'px)';
        bg[2].style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
        bg[3].style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
        bg[4].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        bg[5].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });  
}



// Menu animation

$(function() {
    let menuitems = $(".header .header__burger ul li")
    menuitems.hover(function() {
        $(this).find('a.menu-item').addClass('hover');
        $(this).find('div.menu-item').addClass('hover').marquee({
            duplicated: true,
            direction: "left",
            startVisible: true,
            delayBeforeStart: 0,
            speed: 60,
        });
    }, function() {
        $(this).find('a.menu-item').removeClass('hover');
        $(this).find('div.menu-item').removeClass('hover').marquee('destroy');
    })
})



// Кнопка открытия меню

$(function() {
    $('.header').on('click', '.header__button--burger', function() {
        $(this).closest('.header').find('.header__burger').toggleClass('active');
        $(this).closest('.header').find('.header__nav').toggleClass('active');
        $(this).closest('.header').find('.header__content').toggleClass('hidden');
        $(this).find('img.open').toggleClass('active');
        $(this).find('img.close').toggleClass('active');
    })

    $('.header').on('click', '.header__burger ul li', function() {
        $(this).closest('.header').find('.header__burger').toggleClass('active');
        $(this).closest('.header').find('.header__nav').toggleClass('active');
        $(this).closest('.header').find('.header__content').toggleClass('hidden');
        $(this).closest('.header').find('img.open').toggleClass('active');
        $(this).closest('.header').find('img.close').toggleClass('active');
    })
})

// Кнопки вызова формы

$(function() {
    $('.header .header__form-btn').on('click', function() {
        $('.header__form').toggleClass('active');
    })

    $('.header .header__form-btn-close').on('click', function() {
        $('.header__form').removeClass('active');
    })
})

// Кнопка выбора языка

$(function() {
    $('.header .header__nav-langselection').hover(function() {
        $(this).find('.hidden').fadeIn(500);
    }, function() {
        $(this).find('.hidden').fadeOut(500);
    })
})


// Печатающийся текст на главной

$(function() {
    if ($('#header-heading').length) {
        const words = ["Международное маркетинговое агентство"];
        let i = 0;
        let counter;
        function typeNow(){
            let word = words[i].split("");
            const loopTyping = function() {
                if (word.length > 0) {
                    document.getElementById('header-heading').innerHTML += word.shift();
                } else {
                    setTimeout(deleteNow, 1000);
                    // deleteNow();
                    return false;
                };
                counter = setTimeout(loopTyping, 60);
            };
            loopTyping();
        };
        function deleteNow() {
            let word = words[i].split("");
            const loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    document.getElementById('header-heading').innerHTML = word.join("");
                } else {
                    if (words.length > (i + 1)) {
                        i++;
                    }
                    else {
                        i = 0;
                    };
                    setTimeout(typeNow, 1000);
                    return false;
                };
                counter = setTimeout(loopDeleting, 80);
            };
            loopDeleting();
        };
        typeNow();
    }
})


// Появление карточек на второй странице

if ($('introdusing__cards').length) {
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var elementOffset = $('.introdusing__cards').offset().top;
        var distance = (elementOffset - scrollTop);
        var windowHeight = $(window).height();
        var breakpoint = windowHeight - 50;
        if (distance < breakpoint) {
            $('.introdusing__cards').css({
                'opacity': 1
            });
        }
    });
}

// Появление карточек на первой странице (проекты)

if ($('.portfolio__card').length) {
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        $('.portfolio__card').each(function() {
            var elementOffset = $(this).offset().top;
            var distance = (elementOffset - scrollTop);
            var windowHeight = $(window).height();
            var breakpoint = windowHeight - 100;
            if (distance < breakpoint) {
                console.log('adsasdads')
                $(this).find('img').css({
                    'transform': 'scale(1)'
                });
            }
        })
    });
}

// Анимация руки в форме

$(function() {
    anime({
        targets: '.letstalk .letstalk__form-particle.hand',
        loop: true,
        keyframes: [
            {translateX: -15, translateY: -50, rotate: '-24.7deg'},
            {translateX: 0, translateY: 0, rotate: '0deg'},
        ],
        duration: 2000,
        easing: "easeInOutCubic",
    });
})