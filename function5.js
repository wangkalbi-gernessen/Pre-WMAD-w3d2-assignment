// write a function that takes every item in the array, and adds the word 'HOORAY' to the end of it

let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

const addHooray = function (array) {
  for(let i = 0; i < array.length; i++){
    food[i] += "HOORAY";
  }
  return food;
};

let result = addHooray(food);
console.log(result);