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

gsap.from('.hero_material',
    { opacity: 0, y: 80 }
)
gsap.from('.each_card', {
    opacity: 0,
    y: 60,
    duration: 0.4,
    scrollTrigger: {
        trigger: 'body ',
        scroller: 'body',
        start: 'top',
    }

})

const next = document.querySelector('#next_slide');
const prev = document.querySelector('#previous_slide');

const first = document.querySelector('.each1 img')
const second = document.querySelector('.each2 img')
const third = document.querySelector('.each3 img')
const fourth = document.querySelector('.each4 img')

const slider_array = ['assets/images/asset 1.jpeg', 'assets/images/asset 2.jpeg', 'assets/images/asset 3.jpeg', 'assets/images/asset 4.jpeg', 'assets/images/asset 5.jpeg', 'assets/images/asset 6.jpeg']
const listing_arr = [10, 3, 4, 5, 13, 5];
const country_arr = ['London UK', 'Lion, Singapore', 'Australia', 'Paris, Italy', 'Spain', 'San Francisco, USA']
const listing1 = document.querySelector('.listing1')
const listing2 = document.querySelector('.listing2')
const listing3 = document.querySelector('.listing3')
const listing4 = document.querySelector('.listing4')

const country1 = document.querySelector('.each1 div')
const country2 = document.querySelector('.each2 div')
const country3 = document.querySelector('.each3 div')
const country4 = document.querySelector('.each4 div')


let curr_index = 0;
let second_index;
let third_index;
let fourth_index;

function slider(slider_index) {
    slider_index = (slider_index) % slider_array.length;
    first.src = slider_array[slider_index];
    listing1.innerHTML = `${listing_arr[slider_index]} Listing`;
    country1.innerHTML = `${country_arr[slider_index]}`;

    second_index = (slider_index + 1 + slider_array.length) % slider_array.length;
    second.src = slider_array[second_index];
    listing2.innerHTML = `${listing_arr[second_index]} Listing`;
    country2.innerHTML = `${country_arr[second_index]}`;

    third_index = (slider_index + 2 + slider_array.length) % slider_array.length;
    third.src = slider_array[third_index];
    listing3.innerHTML = `${listing_arr[third_index]} Listing`;
    country3.innerHTML = `${country_arr[third_index]}`;

    fourth_index = (slider_index + 3 + slider_array.length) % slider_array.length;
    fourth.src = slider_array[fourth_index];
    listing4.innerHTML = `${listing_arr[fourth_index]} Listing`;
    country4.innerHTML = `${country_arr[fourth_index]}`;
}
function nextSlide() {
    curr_index = (curr_index === slider_array.length - 1) ? 0 : curr_index + 1;
    slider(curr_index)
}

next.addEventListener('click', () => {
    nextSlide();
    gsap.from('.each_box img', {
        opacity: 0,
        x: -40,
        duration: 0.3
    });
})

function prevvSlide() {
    curr_index = (curr_index === 0) ? slider_array.length - 1 : curr_index - 1;
    slider(curr_index)
}


prev.addEventListener('click', () => {
    prevvSlide();
    gsap.from('.each_box img', {
        opacity: 0,
        x: 40,
        duration: 0.3,
    });
})

slider(curr_index)

const comment_img_arr = ['assets/images/asset 12.jpeg', 'assets/images/asset 13.jpeg', 'assets/images/asset 14.jpeg']
const comment_arr = ['Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', 'The word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'];
const comm_name_arr = ['Dennis Green', 'Vidushi Saini', 'Reshma Sehrawat'];
const guest_arr = ['Italy', 'German', 'London']

const com_img = document.querySelector('.comm img');
const comment = document.querySelector('.comment');
const com_name = document.querySelector('.com_name');
const com_place = document.querySelector('.com_place');



function commSlider(i) {
    i = i % comment_img_arr.length;
    com_img.src = comment_img_arr[i];
    comment.innerHTML = comment_arr[i];
    com_name.innerHTML = comm_name_arr[i];
    com_place.innerHTML = `Guest from ${guest_arr[i]}`;

}
let now_index = 0;
function nextCom() {
    now_index = (now_index === comment_img_arr.length - 1) ? 0 : now_index + 1;
    commSlider(now_index);
    // gsap.from('.complete_comm', {
    //     scale:0.1,
    //     x:200    
    // })
    resetAutoSlide();
}
function prevSlide() {
    now_index = (now_index === 0) ? comment_img_arr.length - 1 : now_index - 1;
    commSlider(now_index);
    resetAutoSlide();
}

const com_next = document.querySelector('#next_comment')
const com_prev = document.querySelector('#previous_comment')


com_next.addEventListener('click', () => {
    nextCom();
})

com_prev.addEventListener('click', () => {
    prevSlide();
})

function startAutoSlide() {
    autoSlideInterval = setInterval(nextCom, 4000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

startAutoSlide();

