import anime from "../animejs.js";

export function detailedAnims() {

    let handAnim = anime({
        targets: '.detailed .detailed__particles img',
        loop: true,
        keyframes: [
            {translateX: '-10'},
            {translateX: '0'},
        ],
        duration: 2000
    });

    $('.detailed .detailed__particles').hover(function() {
        handAnim = anime({
            targets: '.detailed .detailed__particles img',
            loop: true,
            keyframes: [
                {translateX: '-10'},
                {translateX: '0'},
            ],
            duration: 800
        });
    }, function () {
        handAnim = anime({
            targets: '.detailed .detailed__particles img',
            loop: true,
            keyframes: [
                {translateX: '-10'},
                {translateX: '0'},
            ],
            duration: 2000
        });
    });

}