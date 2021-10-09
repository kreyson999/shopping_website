const toSlideRight = document.querySelectorAll('.slide-right');
const toSlideLeft = document.querySelectorAll('.slide-left');
const sliderOptions = {
    root: null,
}
const sliderObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target.classList.contains('slide-right')) {
            entry.target.classList.remove('slide-right');
        } else {
            entry.target.classList.remove('slide-left');
        }
        observer.unobserve(entry.target);
    });
}, sliderOptions);
toSlideLeft.forEach(item => {
    sliderObserver.observe(item);
});
toSlideRight.forEach(item2 => {
    sliderObserver.observe(item2);
});