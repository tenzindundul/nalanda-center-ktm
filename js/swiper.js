function swiperImg() {
    new Swiper('.swiper', {
        loop: true,
        autoplay: { delay: 3000 },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,   // optional but usually needed
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

document.addEventListener('DOMContentLoaded', () => {
    swiperImg();
});