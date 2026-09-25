const burger = document.querySelector('#burger');
const pole = document.querySelector('#pole');
const menu = document.querySelector('#menu');
const menu2 = document.querySelector('#menu2');
burger.addEventListener('click', () => {
    pole.classList.toggle('disp');
    menu.classList.add('disp');
    menu2.classList.add('opac');
})
const cross = document.querySelector('#cross');
cross.addEventListener('click', () => {
    pole.classList.add('disp');
    menu2.classList.toggle('opac');
    menu.classList.toggle('disp');
})
