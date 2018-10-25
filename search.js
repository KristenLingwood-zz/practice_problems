// linear search, return index of sought value

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// binary search on a sorted array

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (val === arr[mid]) return mid;
    if (val > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// with recursion

function recursiveBinarySearch(arr, val, left = 0, right = arr.length - 1) {
  let mid = Math.floor((right - left) / 2 + left);

  while (left <= right) {
    if (arr[mid] === val) return mid;
    if (left === right) return -1;
    if (arr[mid] < val) {
      return recursiveBinarySearch(arr, val, mid + 1, right);
    } else if (arr[mid] > val) {
      return recursiveBinarySearch(arr, val, left, mid);
    }
  }
}
