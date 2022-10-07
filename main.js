'use strict';

const button = document.querySelector('button');

const onclick = (e) => {
  const { x, y, width, height } = button.getBoundingClientRect();
  const radius = Math.sqrt(width * width + height * height);
  button.style.setProperty('--diameter', radius * 2 + 'px');
  const { clientX, clientY } = e;
  const left = ((clientX - x - radius) / width) * 100 + '%';
  const top = ((clientY - y - radius) / height) * 100 + '%';

  button.style.setProperty('--left', left);
  button.style.setProperty('--top', top);
  button.style.setProperty('--a', '');
  setTimeout(() =>
    button.style.setProperty('--a', 'ripple-effect 500ms linear')
  );
};

button.addEventListener('click', onclick);
