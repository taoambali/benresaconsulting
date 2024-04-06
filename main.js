const openMenu = document.querySelector(".open-menu");
const header = document.querySelector('#header');
const closeMenu = document.querySelector(".close-menu");
const navMenu = document.querySelector(".main-nav");
const menuOverlay = document.querySelector(".menu-overlay");
const topLink = document.querySelector(".top-link");
const mediaSize = 1250;

openMenu.addEventListener("click", toggleNav);
closeMenu.addEventListener("click", toggleNav);

function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    // document.body.classList.toggle("hidden-scrolling");
}

navMenu.addEventListener("click", (event) => {
    if(event.target.hasAttribute('data-toggle') && window.innerWidth <= mediaSize) {
        // prevent default anchor click behaviour
        event.preventDefault();
        // console.log("true");
        const navMenuHasChildren = event.target.parentElement;

        if(navMenuHasChildren.classList.contains("active")) {
            collapseSubNavMenu();
        } else {
            if(navMenu.querySelector(".nav-menu-has-children.active")) {
                collapseSubNavMenu();
            }

            navMenuHasChildren.classList.add('active');
            const subNavMenu = navMenuHasChildren.querySelector(".sub-nav-menu");
            subNavMenu.style.maxHeight = subNavMenu.scrollHeight + "px";

        }
        // console.log(navMenuHasChildren);
    } 

});

function resizeFix() {
    // If navMenu is open, collapse it
    if(navMenu.classList.contains("open")) {
        toggleNav();
    }

    // If navMenuHasChildren is expanded, collapse it
    if(navMenu.querySelector(".nav-menu-has-children.active")) {
        collapseSubNavMenu();
    }
}

function collapseSubNavMenu() {
    navMenu.querySelector(".nav-menu-has-children.active .sub-nav-menu").removeAttribute("style");
    navMenu.querySelector(".nav-menu-has-children.active").classList.remove("active");
}

window.addEventListener("resize", function() {
    if(this.innerWidth > mediaSize) {
        resizeFix();
    }
});

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const headerHeight = header.getBoundingClientRect().height;

    // console.log(headerHeight.height);
    if (scrollHeight > headerHeight) {
        header.classList.add("fixed-nav");
    } else {
        header.classList.remove("fixed-nav");
    }


    // setup back to top link
    // if (scrollHeight > 500) {

    //     topLink.classList.add("show-link");
    // } else {
    //     topLink.classList.remove("show-link");
    // }
    

});

const newSwiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        767: {
            slidesPerView: 2
        }
    }
});