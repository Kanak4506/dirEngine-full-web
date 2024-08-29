const comm1 = document.querySelector('#comm1');
        const comm2 = document.querySelector('#comm2');
        const comm3 = document.querySelector('#comm3');
        const title = document.querySelector('.what h1');
        const btns = document.querySelectorAll('.what button');

        const title_arr = ['Offering Reliable Hosting', 'Exceptional Web Solutions', 'Help Our Customer'];
        comm2.addEventListener('click', (e) => {
            title.innerHTML = title_arr[1];
            toggleClasses(e);
        })
        comm1.addEventListener('click', (e) => {
            title.innerHTML = title_arr[0];
            toggleClasses(e);
        })
        comm3.addEventListener('click', (e) => {
            title.innerHTML = title_arr[2];
            toggleClasses(e);

        })

        function toggleClasses(e) {
            btns.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('nope');
            });
            e.target.classList.add('active');
            e.target.classList.remove('nope');
        }
        gsap.from('.left_bg', {
            opacity: 0,
            duration: 1,
            translateX: -400,
            ease: 'power2.inOut',
            lazy: true,
            force3D: true,
            clearProps: true,
            inertia: true
        });

        gsap.from('.right_bg', {
            opacity: 0,
            duration: 1,
            translateX: 400,
            ease: 'power2.inOut',
            lazy: true,
            force3D: true,
            clearProps: true,
            inertia: true
        });


        gsap.to('.xx div',
            { y: '-200px', scale: 1.3, duration: 1, yoyo: true, opacity: 1, borderRadius: '4px', stagger: 0.3, repeat: -1, backgroundColor: '#8dc8ce' }
        )