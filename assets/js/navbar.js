const navContainer = document.querySelector('.nav__container');
const navDetails = document.querySelector('.nav__details');

let navCategoriesList = [];

const navCategories = {
    'main-categories': 
    `
        <li data-categoryid="men-wear" class="nav__button-text">Men</li>
        <li data-categoryid="women-wear" class="nav__button-text">Women</li>
        <li data-categoryid="kids-wear" class="nav__button-text">Kids</li>
    `,
    'men-wear': 
    `
        <li data-categoryid="hoodies-wear" class="nav__button-text">Hoodies</li>
        <li data-categoryid="shoes-wear" class="nav__button-text">Shoes</li>
        <li data-categoryid="pants-wear" class="nav__button-text">Pants</li>
        <li data-categoryid="shirt-wear" class="nav__button-text">Shirts</li>
    `,
    'women-wear': 
    `
        <li data-categoryid="hoodies-wear" class="nav__button-text">Hoodies</li>
        <li data-categoryid="shoes-wear" class="nav__button-text">Shoes</li>
        <li data-categoryid="pants-wear" class="nav__button-text">Pants</li>
        <li data-categoryid="shirt-wear" class="nav__button-text">Shirts</li>
    `,
    'kids-wear': 
    `
        <li data-categoryid="hoodies-wear" class="nav__button-text">Hoodies</li>
        <li data-categoryid="shoes-wear" class="nav__button-text">Shoes</li>
        <li data-categoryid="pants-wear" class="nav__button-text">Pants</li>
        <li data-categoryid="shirt-wear" class="nav__button-text">Shirts</li>
    `,
    'login-bar': 
    `
        <li>
            <form action="">
                <input type="text" name="search" id="search" placeholder="Search...">
            </form>
        </li>
        <li><a href=""><img src="./assets/images/icons/bx-heart.svg" alt="Favorite"></a></li>
        <li><a href=""><img src="./assets/images/icons/bx-cart.svg" alt="Cart"></a></li>
    `,

    // podkategorie
    'shoes-wear': `
        <li class="nav__button-text">Sneakers</li>
        <li class="nav__button-text">Boots</li>
        <li class="nav__button-text">Sandals</li>
    `,
    'pants-wear': `
        <li class="nav__button-text">Jeans</li>
        <li class="nav__button-text">Tracksuits</li>
        <li class="nav__button-text">Leggings</li>
    `,
    'shirt-wear': `
        <li class="nav__button-text">T-Shirts</li>
        <li class="nav__button-text">Sweatshirts</li>
        <li class="nav__button-text">Shirts</li>
    `,

}

navContainer.addEventListener('click', (e) => {
    if (!e.target.alt === 'categories') return;
    navDetails.classList.add('active');
    navCategoriesList.push(e.target.dataset.categoryid);
    navDetails.innerHTML = `<img class="nav__button_categories" src="./assets/images/icons/bx-left-arrow.svg" alt="close">`;
    navDetails.innerHTML += (navCategories[`${e.target.dataset.categoryid}`]) ?? 'There was some error! Hopefully, we will fix later...';
});


navDetails.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__button_categories')) {
        if (navCategoriesList.length > 1) {
            navDetails.innerHTML = `<img class="nav__button_categories" src="./assets/images/icons/bx-left-arrow.svg" alt="close">`;
            navDetails.innerHTML += (navCategories[`${navCategoriesList[navCategoriesList.length - 2]}`]) ?? 'There was some error! Hopefully, we will fix later...';
            navCategoriesList.pop();
        } else {
            navCategoriesList.length = 0;
            navDetails.classList.remove('active');
        }
    }
    if (e.target.dataset.categoryid !== undefined && navCategories[e.target.dataset.categoryid] !== undefined) { 
        navCategoriesList.push(e.target.dataset.categoryid);
        navDetails.innerHTML = `<img class="nav__button_categories" src="./assets/images/icons/bx-left-arrow.svg" alt="close">`;
        navDetails.innerHTML += (navCategories[`${e.target.dataset.categoryid}`]) ?? 'There was some error! Hopefully, we will fix later...';
    } else {
        return;
    };
});
