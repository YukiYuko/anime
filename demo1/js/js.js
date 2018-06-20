anime({
  targets: document.querySelector('.left'),
  translateY: [
    { value: -80},
    { value: 0 }
  ],
  duration: 4000,
  loop: true,
  easing: 'easeInOutQuad'
});

anime({
  targets: document.querySelector('.top'),
  translateX: [
    { value: 20},
    { value: 0},
  ],
  duration: 4000,
  loop: true,
  easing: 'easeInOutQuad'
});

anime({
  targets: document.querySelector('.right'),
  translateY: [
    { value: 20},
    { value: 0},
  ],
  duration: 4000,
  loop: true,
  easing: 'easeInOutQuad'
});