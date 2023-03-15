function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const dataStartChangeColor = document.querySelector('[data-start]');
const dataStopChangeColor = document.querySelector('[data-stop]');
const bodyChangeColor = document.querySelector('body');

let timerId = null;

dataStartChangeColor.addEventListener('click', onStart);
dataStopChangeColor.addEventListener('click', onStop);



function onStart() {
  timerId = setInterval(getBgColor, 1000);

  dataStartChangeColor.setAttribute('disabled', true);
  dataStopChangeColor.removeAttribute('disabled');
}

function onStop() {
  clearInterval(timerId);
  dataStopChangeColor.setAttribute('disabled', true);
  dataStartChangeColor.removeAttribute('disabled');
}

function getBgColor() {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
}
