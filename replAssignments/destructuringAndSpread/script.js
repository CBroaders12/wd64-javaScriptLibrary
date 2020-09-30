let shoppingList = [
  ['eggs', 'milk', 'butter'],
  ['cleaner', 'trash bags', 'detergent'],
  ['thank you card', 'pens', 'gift wrapping'],
  ['shoes', 't-shirt', 'slacks']
];

let [food, household, stationery, clothes] = shoppingList;
// console.log(food);
// console.log(household);
// console.log(stationery);
// console.log(clothes);

shoppingList = [...food, ...household, ...stationery, ...clothes];
console.log(shoppingList);

shoppingList.map((item, index) => {
  return ({
    index: item
  });
});

console.log(obj);