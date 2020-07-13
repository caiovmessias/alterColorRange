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
  rangeRed.addEventListener('change', changeRed);

  rangeGreen = document.querySelector('#rangeGreen');
  rangeGreen.addEventListener('change', changeGreen);

  rangeBlue = document.querySelector('#rangeBlue');
  rangeBlue.addEventListener('change', changeBlue);

  rangeRed.value = 0;
  rangeGreen.value = 0;
  rangeBlue.value = 0;

  textRed = document.querySelector('#textRed');
  textRed.value = rangeRed.value;

  textGreen = document.querySelector('#textGreen');
  textGreen.value = rangeGreen.value;

  textBlue = document.querySelector('#textBlue');
  textBlue.value = rangeBlue.value;
  // prettier-ignore
  square.style.backgroundColor = `rgb(${rangeRed.valueAsNumber}, ${rangeGreen.valueAsNumber}, ${rangeBlue.valueAsNumber}`;
}

function changeRed() {
  textRed.value = rangeRed.value;
  square.style.backgroundColor = `rgb(${rangeRed.valueAsNumber}, ${rangeGreen.valueAsNumber}, ${rangeBlue.valueAsNumber}`;
}

function changeGreen() {
  textGreen.value = rangeGreen.value;
  square.style.backgroundColor = `rgb(${rangeRed.valueAsNumber}, ${rangeGreen.valueAsNumber}, ${rangeBlue.valueAsNumber}`;
}

function changeBlue() {
  textBlue.value = rangeBlue.value;
  square.style.backgroundColor = `rgb(${rangeRed.valueAsNumber}, ${rangeGreen.valueAsNumber}, ${rangeBlue.valueAsNumber}`;
}
