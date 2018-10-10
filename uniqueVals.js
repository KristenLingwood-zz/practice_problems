/*
Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 

You must use the two pointer strategy to solve.
*/

function countUniqueValues(sortedArr) {
  let i = 0;
  let j = 1;

  while (j <= sortedArr.length) {
    if (sortedArr[i] !== sortedArr[j]) {
      i++;
      sortedArr[i] = sortedArr[j];
    } else {
      j++;
    }
  }
  return i;
}
