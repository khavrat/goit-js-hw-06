const listCategoriesRef = document.querySelector('#categories');
const categoriesRef = document.querySelectorAll('.item');


function countCategoriesItems() {
  const amountItems = listCategoriesRef.children.length;
  console.log(`Number of categories: ${amountItems}`);
}


function countCategoryItem() {
  categoriesRef.forEach((category) => {
    const title = category.firstElementChild.textContent;
    console.log(`Category: ${title}`);
    const amountSubItems = category.querySelectorAll('li').length;
    console.log(`Elements: ${amountSubItems}`);
  });
}


countCategoriesItems();
countCategoryItem();
