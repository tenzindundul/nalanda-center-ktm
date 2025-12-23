function toggleMenu() {
    const hamburgerBtn = document.getElementById('hamburger_btn');
    const navPopup = document.getElementById('nav_popup');

    hamburgerBtn.addEventListener('click', () => {
        navPopup.classList.toggle('active');
        // document.body.classList.toggle('no-scroll');
    });

    const navPopupList = document.querySelectorAll('.nav_popup_lists');

    navPopupList.forEach(list => {
        list.addEventListener('click', () => {
            navPopup.classList.remove('active');
            // document.body.classList.remove('no-scroll');
        });
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                navPopup.classList.remove('active');
                // document.body.classList.remove('no-scroll');
            }
        }, 100);
    });

    // 🔹 CLOSE ON SCROLL
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (
            navPopup.classList.contains('active') &&
            Math.abs(window.scrollY - lastScrollY) > 5
        ) {
            navPopup.classList.remove('active');
            // document.body.classList.remove('no-scroll');
        }
        lastScrollY = window.scrollY;
    }, { passive: true });

    // 🔹 CLOSE ON OUTSIDE CLICK
    document.addEventListener('click', (e) => {
        if (!navPopup.classList.contains('active')) return;

        if (
            !navPopup.contains(e.target) &&
            !hamburgerBtn.contains(e.target)
        ) {
            navPopup.classList.remove('active');
            // document.body.classList.remove('no-scroll');
        }
    });
}

function stickyNav() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const headerHeight = header.offsetHeight;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if(!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > headerHeight) {
                    nav.classList.add("sticky");
                } else {
                    nav.classList.remove('sticky');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    stickyNav();
});




