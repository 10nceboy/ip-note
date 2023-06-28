import { getDeviceType } from '~/js/utils/dom';
let deviceType = getDeviceType();

const cards = document.querySelectorAll('.flip-card');

if (['tablet', 'laptop'].includes(deviceType)) {
  [document.querySelector('.menu')].forEach((el) =>
    el.classList.add('fade-in')
  );

  cards.forEach((card) => {
    let cardIndex = card.dataset.card;
    setTimeout(() => {
      card.classList.add('fade-in-delay');
    }, cardIndex * 500);
    setTimeout(() => {
      card.classList.add('pointer-events-auto');
    }, cardIndex * 1000);
  });
}