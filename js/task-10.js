const divBoxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");

btnCreateRef.addEventListener("click", () => {
  createBoxes(inputRef.value);
});

btnDestroyRef.addEventListener("click", () => {
  divBoxesRef.innerHTML = "";
  inputRef.value = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  const boxDivElements = [];
  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement("div");
    divElement.style.width = `${30 + 10 * i}px`;
    divElement.style.height = `${30 + 10 * i}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    boxDivElements.push(divElement);
  };
  return divBoxesRef.append(...boxDivElements);
};
