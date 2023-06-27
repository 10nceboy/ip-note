import Parallax from 'parallax-js';
import { getDeviceType } from '~/js/utils/dom';

let deviceType = getDeviceType();

if (['tablet', 'laptop'].includes(deviceType)) {
  const scene = document.querySelector('#scene');
  const parallaxInstance = new Parallax(scene, {
    hoverOnly: true,
    relativeInput: true,
    selector: '.p-layer',
    scalarY: 20
  });
}
