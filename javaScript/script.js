const navBtn = document.querySelector('.nav__mobile-bars-btn');
const nav = document.querySelector('.nav__mobile-list');
const navItem = document.querySelectorAll('.nav__mobile-list-item');


const menuStart = () => {
    nav.classList.toggle('nav__mobile-list--active');

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav__mobile-list--active');
        });
    });

};

navBtn.addEventListener('click', menuStart);




const navShadow = document.querySelector('.nav');
const navShadowIco = document.querySelector('.nav__brand-ico');
const navShadowBtn = document.querySelector('.nav__mobile-bars-btn');
const navShadowLink = document.querySelectorAll('.nav__desktop-list-item');

function addShadow() {
    if (window.scrollY >= 200) {
        navShadow.classList.add('shadow-bg');
        navShadowIco.classList.add('color');
        navShadowBtn.classList.add('color');
        for (let i = 0; i < navShadowLink.length; i++) {
            navShadowLink[i].classList.add('color');
        }

    } else {
        navShadow.classList.remove('shadow-bg');
        navShadowIco.classList.remove('color');
        navShadowBtn.classList.remove('color');
        for (let i = 0; i < navShadowLink.length; i++) {
            navShadowLink[i].classList.remove('color');
        }
    }
}
window.addEventListener('scroll', addShadow)