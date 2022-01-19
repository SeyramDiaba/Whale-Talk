//text you want to translate into “whale talk”.
let input = 'Make it happen';
// vowels excluding 'y'//
const vowels = ['a','i','e','o','u'];

let resultArray = [];

// iterate through input text
for (let i = 0; i < input.length; i++) {
  //console.log('i is '+i+'   '+ input[i]);
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i]);
    }
    }
  }
}

console.log(resultArray.join('').toUpperCase());