const scrollTriggerPoint = document.body.scrollHeight * 0.15;

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) { // Check if the screen is larger than mobile breakpoint
        const currentScroll = window.scrollY;

        if (currentScroll > scrollTriggerPoint) {
            gsap.to(".nav_animate", { display: "flex", duration: 0.5, opacity: 1 });
        } else {
            gsap.to(".nav_animate", { display: "flex", duration: 0.5, opacity: 0 });
        }
    } else {
        gsap.to(".nav_animate", { display: "none", duration: 0.5 }); // Ensure it's hidden on mobile screens
    }
});

// Optional: Handle resize events to ensure the element visibility updates if the window is resized
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        gsap.to(".nav_animate", { display: "none", duration: 0.5 });
    }
});

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