// An example of default functions, we can set our paramters equal to a preset value to test a function.
// Along with a value that is displayed in a scenario that arguements aren't passed into the parameters.
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList();
// Upon calling the function: This is the following of what will be called
// 'Remember to buy milk'
// 'Remember to buy bread'
// 'Remember to buy eggs'
