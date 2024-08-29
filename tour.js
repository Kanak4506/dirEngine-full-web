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
