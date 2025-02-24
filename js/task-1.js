const categories = document.querySelectorAll('.item');
//console.log(categories); //NodeList(3) [li.item, li.item, li.item]
console.log('Number of categories: ', categories.length);

categories.forEach(function (category) {
  const headerOfCategory = category.querySelector('h2');
  const itemsInsideCategory = category.querySelectorAll('ul li');

  console.log(`Category: ${headerOfCategory.textContent}`);
  console.log(`Elements: ${itemsInsideCategory.length}`);
});