
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

