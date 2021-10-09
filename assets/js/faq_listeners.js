const collapsible = document.querySelectorAll('.collapsible');

collapsible.forEach(item => {
    item.addEventListener('click', (e) => {
        const itemText = item.querySelector('.collapsible-text');
        const itemArrow = item.querySelector('.faq__button');
        if (itemText.classList.contains('hidden')) {
            itemText.classList.remove('hidden');
            itemArrow.classList.add('active');
        }  else {
            itemText.classList.add('hidden');
            itemArrow.classList.remove('active');
        }
    });
});