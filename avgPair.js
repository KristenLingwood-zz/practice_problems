/* Multiple Pointers -- Average Pair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair. 
Time: O(n)
Space: O(1)
*/

function averagePair(arr, t) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if ((arr[i] + arr[j]) / 2 === t) return true;
    if ((arr[i] + arr[j]) / 2 > t) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}
