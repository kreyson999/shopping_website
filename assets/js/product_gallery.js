const productGallery = document.querySelector('.product__gallery');
const productGalleryMain = productGallery.querySelector('.product-img-main');
productGallery.addEventListener('click', (e) => {
    if (e.target.src === undefined) return;
    productGalleryMain.children[0].src = e.target.src;
});