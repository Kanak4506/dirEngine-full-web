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


const error = document.querySelectorAll('.form_error');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

function clearErrors() {
    for(const each of error) {
        each.innerHTML = '';
    }
}

function setError(assigned, message) {
    const element = document.querySelector(`.${assigned}`);
    element.textContent = message;
}
function formValidation() {
    clearErrors()
    let isValid = true;
    let username = /^[a-z]{3,12}$/i;
    let pass = /^[\w@-]{8,20}$/
    let telephone = /^[0-9]{10}$/;
    let pemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!username.test(firstName.value)) {
      setError('efname', "Please enter a valid first name(3-12 characters only).")
      isValid = false;
    }
  
    if (!username.test(lastName.value)) {
      setError('elname', "Please enter a valid last name(3-12 characters only).")
      isValid = false;
    }
    if(!pemail.test(email.value)) {
      setError('eemail', "Please enter a valid email Id.")
      isValid = false;
    }
    if(!telephone.test(phone.value)) {
      setError('etelephone', "Please enter a valid mobile number.")
      isValid = false;
    }
    return isValid;
  }


  // submit.addEventListener('click', (e) => {
  //   if (!formValidation()) {
  //     e.preventDefault();
  //   }  else {
  //       window.location.href = 'index.html';
  //       console.log("hello")
  //     }
  // })

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();  // Prevent default form submission
//     if (formValidation()) {
//       e.preventDefault();
//         window.location.href = 'index.html';  // Redirect to index.html
//     }
// });

var sub = document.querySelector('#submit a')

function changehref() {
      sub.href = 'http://127.0.0.1:5500/index.html';
}

submit.addEventListener('click', () => {
      if (formValidation()) {
      changehref();
    }  
  })

