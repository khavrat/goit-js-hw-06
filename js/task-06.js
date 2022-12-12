const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (inputRef.value.length > inputRef.dataset.length) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}
