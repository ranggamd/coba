const sosmed = document.querySelector('.sosmed');
const jumbotron = document.querySelector('.text-jumbotron');
const nav = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle-hamburger');
const about = document.querySelector('.about');
const pricing = document.querySelector('.pricing-area');
const faq = document.querySelector('.faq');

// console.log(document.styleSheets[0].cssRules[0])

const tl = new TimelineMax();

tl.fromTo(nav, 2.5, { opacity: 0}, { opacity: 1, ease: Power2.easeInOut }, "-=0.7")
    .fromTo(jumbotron, 2.5, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power2.easeInOut }, "-=1")
    .fromTo(sosmed, 2, { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=1.3");

window.addEventListener('scroll', () => {
    console.log(window.scrollY);

// STICKY NAVBAR
    if (window.pageYOffset >= 100) {
        navToggle.style.color = 'white';
        nav.classList.add("sticky");
        nav.classList.remove("navbar-light");
    } else {
        navToggle.style.color = null;
        nav.classList.add("navbar-light");
        nav.classList.remove("sticky");
    }
// STICKY NAVBAR

// ALL SECTION ANIMATION
    if (window.scrollY == 200 && window.scrollY <= 300){
        tl.fromTo(about, 3, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power2.easeInOut }, "-=0.4")
    }else if(window.scrollY == 1300 && window.scrollY <= 1400){
        tl.fromTo(pricing, 3, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power2.easeInOut }, "-=0.4")
    }else if(window.scrollY == 2100 && window.scrollY <= 2200){
        tl.fromTo(faq, 3, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power2.easeInOut }, "-=0.4")
    }
// ALL SECTION ANIMATION
});