import Parallax from 'parallax-js';

const scene = document.querySelector('#scene');
const parallaxInstance = new Parallax(scene, {
  hoverOnly: true,
  relativeInput: true,
  selector: '.p-layer',
  pointerEvents: true,
  scalarY: 20
});
