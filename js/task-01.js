const listCategoriesRef = document.querySelector("#categories");
const categoriesRef = document.querySelectorAll(".item");

function countListCategoriesItems() {
  const amountItems = listCategoriesRef.children.length;
  console.log(`Number of categories: ${amountItems}`);
}

function countCategoryItems() {
  categoriesRef.forEach((category) => {
    const title = category.firstElementChild.textContent;
    console.log(`Category: ${title}`);
    const amountSubItems = category.lastElementChild.children.length;
    console.log(`Elements: ${amountSubItems}`);
  });
}

countListCategoriesItems();
countCategoryItems();
