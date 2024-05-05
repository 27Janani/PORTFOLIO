/*=======================================toggle icon navbar=========================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};


/*=======================================scroll section active link=========================================*/


let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach.apply(link => {
                links.classList.ramove('active');
                document.querySelector("header nav a[herf*=" + id + "]") .classList.add("active");
            });
        }
  });

  /*=======================================sticky navbar=========================================*/

  let header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 100);

  /*=======================================remove toggle icon and navbar=========================================*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*=======================================scroll reavel=========================================*/
ScrollReveal({
        distance:'70px',
        duration: 2000,
        delay:200,
});
     
ScrollReveal().reveal(".Home-content", 'heading', { origin: 'top' });
ScrollReveal().reveal('.home-image', '.portfolio-box', '.contact form', { origin: 'button' });
ScrollReveal().reveal('.Home-contact  h1', '.about-img', { origin: 'left'});
ScrollReveal().reveal('.Home-contact p', '.About-content', { origin: 'right' });


/*=======================================typed js=========================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Backend Developer'],
    typeSpeed: 70,
    backDelay: 70,
    backDelay: 1000,
    loop:true,
});