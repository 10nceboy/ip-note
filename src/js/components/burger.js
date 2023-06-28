import { toggleOverflow } from '~/js/utils/dom';

const button = document.querySelector('.burger-button');
const menu = document.querySelector('.burger-menu');
const logoIcon = document.querySelector('.logo-icon');
let opened = false;

const handleBurgerClick = () => {
  if (opened === false) {
    button.classList.add('burger-button-opened');
    setTimeout(() => {
      logoIcon.classList.add('logo-icon-black');
    }, 200);
    menu.classList.add('burger-active');
    toggleOverflow(true);
  } else {
    button.classList.remove('burger-button-opened');
    logoIcon.classList.remove('logo-icon-black');
    menu.classList.remove('burger-active');
    toggleOverflow(false);
  }
  opened = !opened;
};

button.addEventListener('click', handleBurgerClick);
