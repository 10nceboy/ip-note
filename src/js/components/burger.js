import { logoIcons } from '~/js/constants/logo';
import { toggleOverflow } from '~/js/utils/dom';

const button = document.querySelector('.burger-button');
const menu = document.querySelector('.burger-menu');
const logoIcon = document.querySelector('.header-icon');
let opened = false;

button.addEventListener('click', () => {
  if (opened === false) {
    button.classList.add('burger-button-opened');
    setTimeout(() => {
      logoIcon.innerHTML = logoIcons.active;
    }, 100);
    menu.classList.add('burger-active');
    toggleOverflow(true);
  } else {
    button.classList.remove('burger-button-opened');
    logoIcon.innerHTML = logoIcons.standart;
    menu.classList.remove('burger-active');
    toggleOverflow(false);
  }
  opened = !opened;
});
