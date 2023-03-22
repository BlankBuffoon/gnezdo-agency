import anime from "../animejs.js"

export function atcionAnims() {

    // Slide 1

    anime({
        targets: '.action.swiper .swiper-slide-particles img.glasses',
        loop: true,
        keyframes: [
            {translateY: '5'},
            {rotate: '5deg'},
            {rotate: '3deg'},
            {rotate: '-1deg'},
            {translateY: '-4'},
            {rotate: '2deg'},
            {rotate: '7deg'},
            {rotate: '4deg'},
            {rotate: '0deg'},
        ],
        duration: 3500
    });
    
    anime({
        targets: '.action.swiper .swiper-slide-particles img.mouth',
        loop: true,
        keyframes: [
            {rotate: '12deg'},
            {rotate: '-1deg'},
            {translateY: '5'},
            {rotate: '3deg'},
            {translateY: '-4'},
            {rotate: '2deg'},
            {rotate: '7deg'},
            {rotate: '0deg'},
            {rotate: '4deg'},
        ],
        duration: 4000
    });
    
    anime({
        targets: '.action.swiper .swiper-slide-particles img.chair',
        loop: true,
        keyframes: [
            {translateY: '5'},
            {rotate: '5deg'},
            {rotate: '-1deg'},
            {rotate: '4deg'},
            {rotate: '8deg'},
            {rotate: '0deg'},
            {rotate: '-8deg'},
            {translateY: '-4'},
            {rotate: '0deg'},
        ],
        duration: 4500
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.flower',
        loop: true,
        keyframes: [
            {translateY: '0'},
            {translateY: '8'},
            {translateY: '15'},
            {translateY: '8'},
            {translateY: '0'},
        ],
        duration: 1300
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.rainbow',
        loop: true,
        keyframes: [
            {rotate: '0deg'},
            {rotate: '2deg'},
            {rotate: '5deg'},
            {rotate: '3deg'},
            {rotate: '0deg'},
        ],
        duration: 1000
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.lightning',
        loop: true,
        keyframes: [
            {translateY: '0', rotate: "0deg"},
            {translateY: '11', rotate: "1deg"},
            {translateY: '33', rotate: "3deg"},
            {translateY: '8', rotate: "1deg"},
            {translateY: '0', rotate: "0deg"},
        ],
        duration: 2000
    });

    // Slide 2

    anime({
        targets: '.action.swiper .swiper-slide-particles img.cat',
        loop: true,
        keyframes: [
            {translateY: '5'},
            {rotate: '2deg'},
            {rotate: '-1deg'},
            {rotate: '3deg'},
            {rotate: '5deg'},
            {rotate: '0deg'},
            {rotate: '-3deg'},
            {translateY: '-4'},
            {rotate: '0deg'},
        ],
        duration: 4500
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.tape',
        loop: true,
        keyframes: [
            {rotate: '2deg'},
            {rotate: '-3deg'},
        ],
        duration: 1000
    });

    // Slide 3

    anime({
        targets: '.action.swiper .swiper-slide-particles img.flamingo',
        loop: true,
        keyframes: [
            {rotate: '0deg'},
            {rotate: '5deg'},
            {rotate: '-1deg'},
            {translateY: '5'},
            {translateY: '-4'},
            {rotate: '3deg'},
            {rotate: '0deg'},
            {rotate: '2deg'},
            {rotate: '-3deg'},
        ],
        duration: 4500
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.mouth-s3',
        loop: true,
        keyframes: [
            {translateY: '0', rotate: "0deg"},
            {translateY: '10', rotate: "8deg"},
            {translateY: '30', rotate: "15deg"},
            {translateY: '10', rotate: "8deg"},
            {translateY: '0', rotate: "0deg"},
        ],
        duration: 2000
    });
    
    anime({
        targets: '.action.swiper .swiper-wrapper .particle.plane',
        loop: true,
        keyframes: [
            {translateX: '100'},
            {rotate: '-3deg'},
            {translateX: '200'},
            {rotate: '10deg'},
            {translateX: '400'},
            {rotate: '4deg'},
            {translateX: '600'},
            {rotate: '-1deg'},
            {translateX: '400'},
            {rotate: '4deg'},
            {translateX: '200'},
            {rotate: '10deg'},
            {translateX: '100'},
            {rotate: '-3deg'},
            {translateX: '0'},
            {rotate: '0deg'},
        ],
        duration: 7000
    });

    // Slide 4

    // ...

    // Slide 5

    // ...

    // Slide 6

    anime({
        targets: '.action.swiper .swiper-slide-particles img.guse',
        loop: true,
        keyframes: [
            {rotate: '-1deg'},
            {translateY: '5'},
            {translateY: '-4'},
            {rotate: '-3deg'},
            {rotate: '0deg'},
            {rotate: '3deg'},
            {rotate: '2deg'},
            {rotate: '0deg'},
            {rotate: '5deg'},
        ],
        duration: 4500
    });

    anime({
        targets: '.action.swiper .swiper-wrapper .particle.seashell',
        loop: true,
        keyframes: [
            {rotate: "0deg"},
            {rotate: "3deg"},
            {rotate: "5deg"},
            {rotate: "3deg"},
            {rotate: "0deg"},
        ],
        duration: 1500
    });
    
    anime({
        targets: '.action.swiper .swiper-wrapper .particle.moon',
        loop: true,
        keyframes: [
            {rotate: "0deg"},
            {rotate: "-3deg"},
            {rotate: "-5deg"},
            {rotate: "-3deg"},
            {rotate: "0deg"},
        ],
        duration: 1300
    });
    
    anime({
        targets: '.action.swiper .swiper-wrapper .particle.whale',
        loop: true,
        keyframes: [
            {rotate: "0deg"},
            {rotate: "-2deg"},
            {rotate: "-8deg"},
            {rotate: "-2deg"},
            {rotate: "0deg"},
        ],
        duration: 1700
    });
}