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