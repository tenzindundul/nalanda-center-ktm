function toggleMenu() {
    const hamburgerBtn = document.getElementById('hamburger_btn');
    const navPopup = document.getElementById('nav_popup');

    hamburgerBtn.addEventListener('click', () => {
        navPopup.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    const navPopupList = document.querySelectorAll('.nav_popup_lists');

    navPopupList.forEach(list => {
        list.addEventListener('click', () =>{
            navPopup.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navPopup.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    })
}

function swiperImg() {
    const swiper = new Swiper('.swiper', {
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


function navShowHide() {
    // let lastScroll = 0;
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');

    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        // const current = window.scrollY;

        if (window.scrollY > headerHeight) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove('sticky');
        }

        // lastScroll = current;
    });
}

toggleMenu()
swiperImg()
navShowHide()




