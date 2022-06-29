const btn=document.querySelector('.header__button');
const header=document.querySelector('.header');

btn.addEventListener('click', (event) => {
    header.classList.toggle ('header--open');
});