/*
Frequency Counter
Write a function called sameFrequency. Given two positive integers, find out of the two numbers have the same frequency of digits.
Time: O(n)
*/

function sameFrequency(numA, numB) {
  let numAstr = numA.toString();
  let numBstr = numB.toString();
  if (numAstr.length !== numBstr.length) return false;
  let counterA = {};
  let counterB = {};

  for (let char of numAstr) {
    counterA[char] ? counterA[char]++ : (counterA[char] = 1);
  }
  for (let char of numBstr) {
    if (!counterA[char]) return false;
    counterB[char] ? counterB[char]++ : (counterB[char] = 1);
  }
  for (let char in counterA) {
    if (counterA[char] !== counterB[char]) return false;
  }
  return true;
}
