// bubble sort O(n^2)

function bubbleSort(arr) {
  let noSwaps = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}

// selection sort O(n^2)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }
    if (i !== smallestIdx) {
      [arr[i], arr[smallestIdx]] = [arr[smallestIdx], arr[i]];
    }
  }
  return arr;
}

// insertion sort O(n^2)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = currentVal;
    }
  }
  return arr;
}

// merge sort O(nlogn)

// first build a function to merge sorted arrays

// merge function pseudo code
/*
create an empty array
while there are still values we haven't looked at in the two unmerged arrays, compare values with i/j pointers
if the value in the first array is smaller than value in the second array, put it into the new array and move to the next
if it is bigger, put the value from the second array into new array and move to the next
 once one array is empty, push remaining values of other array in order to the new array
*/

function merge(arr1, arr2) {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
}

// now build a merge sort function (use recursion)
/*
break up array into halves until each array is either empty or only has 1 element
Once you have smaller arrays, merge them back together using merge function until you are back at the full length of the original array
return array
*/

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftSide = mergeSort(arr.slice(0, mid));
  let rightSide = mergeSort(arr.slice(mid));
  return merge(leftSide, rightSide);
}
