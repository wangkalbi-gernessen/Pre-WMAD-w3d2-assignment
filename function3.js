// write a function that console logs each item of the array one line at a time

let example = [1, 2, 3, 4, 'five', 6, 7];
let arrays = [];

const logItems = function (array) {
  for(let i = 0; i < array.length; i++){
    arrays += array[i];
  }
  return arrays.join(',');
};

let result = logItems(example);
console.log(result);