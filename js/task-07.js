const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", function (event) {
  if ((this.value -= 1) || (this.value += 1)) {
    textRef.style.fontSize = this.value + "px";
  }
});
