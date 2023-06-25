const fade = () => {
  [
    document.querySelector('.main-header'),
    document.querySelector('.menu')
  ].forEach((el) => el.classList.add('fade-in'));
  document
    .querySelectorAll('.flip-card')
    .forEach((card) => card.classList.add('fade-in-delay'));
};

document.addEventListener('DOMContentLoaded', fade);
