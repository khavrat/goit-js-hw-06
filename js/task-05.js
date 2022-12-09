const inputRef = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

inputRef.addEventListener('input', function (event) {
    nameLabel.textContent = event.currentTarget.value;
    if (inputRef.value.length < 1) {
        nameLabel.textContent = "Anonymous";
    };
})
