const sections = document.querySelectorAll('section');

const options = {
    root: null,
    rootMargin: '-1em',
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('loadedSection');
        observer.unobserve(entry.target);
    });
});

sections.forEach(item => {
    observer.observe(item);
})