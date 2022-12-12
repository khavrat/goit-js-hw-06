const btnChangeColorRef = document.querySelector('.change-color');
const spanColorValueRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColorRef.addEventListener('click', toChangeColor);

function toChangeColor(event) {
  let currentColor = document.body.style.backgroundColor = getRandomHexColor();
  spanColorValueRef.innerHTML = currentColor;
}
