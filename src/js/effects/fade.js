import { getDeviceType } from '~/js/utils/dom';
let deviceType = getDeviceType();
const cards = document.querySelectorAll('.flip-card');

if (['tablet', 'laptop'].includes(deviceType)) {
  document.querySelector('.menu').classList.add('fade-in-menu');
  document.querySelector('.main-header').classList.add('fade-in-header');
  document.querySelector('.reveal').classList.add('reveal-animated');

  cards.forEach((card) => {
    let cardId = card.dataset.card;
    setTimeout(() => {
      card.classList.add('fade-in-delay');
    }, cardId * 500);
    setTimeout(() => {
      card.classList.add('pointer-events-auto');
    }, cardId * 1000);
  });
}
