const menu_btn = document.querySelector('#menu_btn');
const menu_drop = document.querySelector('.menu_drop');
const menu_items = document.querySelectorAll('.menu_drop li');

menu_btn.addEventListener('click', () => {
    if (menu_drop.classList.contains('hidden')) {
        menu_drop.classList.remove('hidden');

        gsap.fromTo(menu_drop,
            { height: '0px' },
            { height: 'auto', duration: 0.5, ease: 'power1.out' }
        );

        gsap.fromTo(menu_items,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.3, stagger: 0.1 }
        );
    } else {
        gsap.to(menu_drop, {
            height: '0px',
            duration: 0.5,
            ease: 'power1.out',
            onComplete: () => {
                menu_drop.classList.add('hidden');
            }
        });
        gsap.fromTo(menu_items,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -20, duration: 0.1 }
        );
    }
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.text_color',
        start: '20% 50%',
        end: '120% 50%',
        scrub: 1,
    }
});

tl.to('.text_change h1', {
    width: '100%'
});
tl.to('.text_change h2', {
    width: '100%',
    delay: -0.47,
})
