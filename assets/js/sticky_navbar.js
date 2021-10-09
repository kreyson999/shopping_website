const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navLogo = document.querySelector('.nav__logo');
const navOptions = {
    threshold: 0,
    root: null,
    rootMargin: `-${nav.offsetHeight}px 0px 0px 0px`
}
const navObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach((e) => {
        if(!e.isIntersecting) {
            nav.classList.add('nav__not_intersecting');
            navLogo.classList.remove('hidden');
        } else {
            nav.classList.remove('nav__not_intersecting');
            navLogo.classList.add('hidden');
            
        } 
    });
}, navOptions);
navObserver.observe(header);