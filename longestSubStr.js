/* Sliding Window -- findLongestSubstring
Write a function called findLongestSubstring which accpets a string and returns the length of the longest substring with all distinct characters
*/

function findLongestSubstring(str) {
  let longestCount = 0;
  let start = 0;
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      start = Math.max(start, seen[str[i]]);
    }
    longestCount = Math.max(longestCount, i - start + 1);
    seen[str[i]] = i + 1;
  }
  return longestCount;
}
