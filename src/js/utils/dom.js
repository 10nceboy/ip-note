export const getScrollbarWidth = () => {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
};

export const toggleOverflow = (flag) => {
  if (flag) {
    const paddingRight = getScrollbarWidth();
    document.body.style.paddingRight = `${paddingRight}px`;
    document.body.style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'hidden';
  } else {
    document.body.style.paddingRight = '';
    document.body.style.overflowY = '';
    document.querySelector('html').style.overflow = '';
  }
};

export const getDeviceType = () => {
  const breakpoints = {
    mobile: 360,
    smartphone: 480,
    tablet: 960,
    laptop: 1200
  };

  let deviceType = '';

  for (const [key, value] of Object.entries(breakpoints)) {
    if (window.matchMedia(`(min-width: ${value}px)`).matches) {
      deviceType = key;
    }
  }
  return deviceType || 'mobile';
};
