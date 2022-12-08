const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredientsRef = document.querySelector("#ingredients");

const makeListIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const elementLi = document.createElement("li");
    elementLi.classList.add("item");
    elementLi.textContent = ingredient;

    return elementLi;
  });
};

const elements = makeListIngredients(ingredients);
listIngredientsRef.append(...elements);
