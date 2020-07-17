window.addEventListener('load', start);

var rangeRed = null;
var rangeGreen = null;
var rangeBlue = null;
var textRed = null;
var textGreen = null;
var textBlue = null;
var square = null;

function start() {
  square = document.querySelector('#square');

  rangeRed = document.querySelector('#rangeRed');
  rangeRed.addEventListener('input', changeColor);

  rangeGreen = document.querySelector('#rangeGreen');
  rangeGreen.addEventListener('input', changeColor);

  rangeBlue = document.querySelector('#rangeBlue');
  rangeBlue.addEventListener('input', changeColor);

  textRed = document.querySelector('#textRed');
  textRed.value = rangeRed.value;

  textGreen = document.querySelector('#textGreen');
  textGreen.value = rangeGreen.value;

  textBlue = document.querySelector('#textBlue');
  textBlue.value = rangeBlue.value;
  // prettier-ignore
  square.style.backgroundColor = `rgb(${rangeRed.valueAsNumber}, ${rangeGreen.valueAsNumber}, ${rangeBlue.valueAsNumber}`;
}

function changeColor() {
  textRed.value = rangeRed.value;
  textGreen.value = rangeGreen.value;
  textBlue.value = rangeBlue.value;
  square.style.backgroundColor = `rgb(${rangeRed.valueAsNumber}, ${rangeGreen.valueAsNumber}, ${rangeBlue.valueAsNumber}`;
}
