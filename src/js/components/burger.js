import { logo } from '../constants/logo';
import { toggleOverflow } from '../utils/dom';

const button = document.querySelector('.burger-button');
const menu = document.querySelector('.burger-menu');
const logoIcon = document.querySelector('.header-icon');
let state = false;

button.addEventListener('click', () => {
  if (state === false) {
    button.classList.add('burger-button-opened');
    window.setTimeout(() => {
      logoIcon.innerHTML = logo.active;
    }, 100);
    menu.classList.add('active');
    toggleOverflow(true);
  } else {
    button.classList.remove('burger-button-opened');
    logoIcon.innerHTML = logo.standart;
    menu.classList.remove('active');
    menu.classList.add('unactive');
    toggleOverflow(false);
  }

  state = !state;
});
