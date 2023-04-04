import anime from "../animejs.js"

export function atcionAnims() {

    // Slide 1

    anime({
        targets: '.action.swiper .swiper-slide-particles img.glasses',
        loop: true,
        keyframes: [
            {rotate: '-20deg'},
            {rotate: '0deg'},
        ],
        duration: 1800,
        easing: "easeInOutCubic",
    });
    
    anime({
        targets: '.action.swiper .swiper-slide-particles img.mouth',
        loop: true,
        keyframes: [
            {rotate: '-20deg'},
            {rotate: '0deg'},
        ],
        duration: 1800,
        easing: "easeInOutCubic",
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.flower',
        loop: true,
        keyframes: [
            {rotate: '360deg'},
            {rotate: '0deg'},
        ],
        duration: 20000,
        easing: "linear",
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.rainbow',
        loop: true,
        keyframes: [
            {rotate: '5deg'},
            {rotate: '0deg'},
            {rotate: '-5deg'},
            {rotate: '0deg'},
        ],
        duration: 2000,
        easing: "linear",
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.lightning',
        loop: true,
        keyframes: [
            {translateY: '60', rotate: "-24deg"},
            {translateY: '0', rotate: "0deg"},
        ],
        duration: 1200,
        easing: "easeInBack",
    });

    // Slide 2

    anime({
        targets: '.action.swiper .swiper-slide-particles img.cat',
        loop: true,
        keyframes: [
            {rotate: '-7.2deg', translateX: -20},
            {rotate: '0deg', translateX: 0},
        ],
        duration: 1500,
        easing: "easeInOutCubic",
    });

    anime({
        targets: '.action.swiper .swiper-slide-particles img.ufo',
        loop: true,
        keyframes: [
            {rotate: '-5.3deg', scale: '1.2'},
            {rotate: '0deg', scale: '1'},
        ],
        duration: 1500,
        easing: "easeInOutCubic",
    });

    // Slide 3

    anime({
        targets: '.action.swiper .swiper-slide-particles img.flamingo',
        loop: true,
        keyframes: [
            {rotate: '-7.1deg', right: '-170px'},
            {rotate: '0deg',  right: '-360px'},
        ],
        duration: 2000,
        easing: "easeInOutCubic",
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.mouth-s3',
        loop: true,
        keyframes: [
            {translateY: '10', rotate: "-9deg"},
            {translateY: '0', rotate: "0deg"},
        ],
        duration: 2000,
        easing: "easeInOutCubic",
    });
    
    anime({
        targets: '.action.swiper .swiper-wrapper .particle.plane',
        loop: true,
        keyframes: [
            {translateX: '700', rotate: '12.1deg'},
            {translateX: '0', rotate: '-11.5deg'},
            {translateX: '0', rotate: '0deg'},
        ],
        duration: 4000,
        easing: "easeInOutCubic",
    });

    // Slide 4

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.phone',
        loop: true,
        keyframes: [
            {translateX: 5, rotate: '-9.5deg'},
            {translateX: 0, rotate: '0deg'},
        ],
        duration: 850,
        easing: "easeOutCubic",
    });
    
    anime({
        targets: '.action.swiper .swiper-wrapper .particle.hand',
        loop: true,
        keyframes: [
            {translateX: 10, rotate: '-10.5deg'},
            {translateX: 0, rotate: '0deg'},
        ],
        duration: 2000,
        easing: "easeInOutCubic",
    });

    // Slide 5

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.baby',
        loop: true,
        keyframes: [
            {rotate: '1deg'},
            {rotate: '0deg'},
        ],
        duration: 2300,
        easing: "easeInOutCubic",
    });
    
    anime({
        targets: '.action.swiper .swiper-wrapper .particle.hand-s5',
        loop: true,
        keyframes: [
            {translateY: 15, rotate: '7.5deg'},
            {translateY: 0, rotate: '0deg'},
        ],
        duration: 1500,
        easing: "easeInOutCubic",
    });

    // Slide 6

    anime({
        targets: '.action.swiper .swiper-slide-particles img.guse',
        loop: true,
        keyframes: [
            {translateX: 10, rotate: '5.7deg'},
            {translateX: 0, rotate: '0deg'},
        ],
        duration: 3100,
        easing: "easeInOutCubic",
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.seashell',
        loop: true,
        keyframes: [
            {translateX: 180, rotate: "50deg"},
            {translateX: 0, rotate: "0deg"},
        ],
        duration: 2000,
        easing: "easeInOutCubic",
    });
    
    anime({
        targets: '.action.swiper .swiper-wrapper .particle.moon',
        loop: true,
        keyframes: [
            {rotate: "360deg"},
            {rotate: "0deg"},
        ],
        duration: 25000,
        easing: "linear",
    });
    
    anime({
        targets: '.action.swiper .swiper-wrapper .particle.whale',
        loop: true,
        keyframes: [
            {translateY: 15, translateX: 20, rotate: "-4deg"},
            {translateY: 0, translateX: 0, rotate: "0deg"},
        ],
        duration: 1700,
        easing: "easeInOutCubic",
    });
}