// bubble sort

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

// selection sort

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

// insertion sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = currentVal;
    }
  }
  return arr;
}
