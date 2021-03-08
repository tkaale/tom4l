const navBtn = document.querySelector('.nav__mobile-bars-btn');
const nav = document.querySelector('.nav__mobile-list');

function menuStart() {
    nav.classList.toggle('nav__mobile-list--active')
}

navBtn.addEventListener('click', menuStart);