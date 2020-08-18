// write a function that takes the last item of the second array, and adds it to the end of the first array.
let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

let numbers = ['1', '2', '3', '4'];

const addTheLast = function (array1, array2) {
  array1.push(array2[array2.length -1]);
  console.log(array1); 
};
addTheLast(food, numbers);
