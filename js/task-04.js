const counterRef = document.querySelector("#counter");
const decrementBtnRef = document.querySelector("[data-action=decrement]");
const valueRef = document.querySelector("#value");
const incrementBtnRef = document.querySelector("[data-action=increment]");

let counterValue = 0;

decrementBtnRef.addEventListener("click", function () {
  const result = (counterValue -= 1);
  valueRef.textContent = result;
});

incrementBtnRef.addEventListener("click", function () {
  const result = (counterValue += 1);
  valueRef.textContent = result;
});
