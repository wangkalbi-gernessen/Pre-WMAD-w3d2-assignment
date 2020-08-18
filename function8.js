// write a function that splits the string into an array with an item for each word.
// console log this array
let sentence = "I am a sentence"

const splitSentence= function (array) {
  sentence = array.split(' ');
  return sentence;
};

let result = splitSentence(sentence);
console.log(result);