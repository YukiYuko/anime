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

anime({
  targets: document.querySelector('.ban1'),
  translateX: [
    { value: -30},
    { value: 0},
  ],
  translateY:[
    { value: 30},
    { value: 0}
  ],
  duration: 4000,
  loop: true,
  easing: 'easeInOutQuad'
});
anime({
  targets: document.querySelector('.ban2'),
  translateX: [
    { value: -15},
    { value: 0},
  ],
  translateY:[
    { value: 15},
    { value: 0}
  ],
  duration: 4000,
  loop: true,
  easing: 'easeInOutQuad'
});