// given two strings, write a function to determin if the second string is an anagram of the first. You MUST use a frequency counter. 


/*
* determins if strB is an anagram of strA
* @param {string} strA
* @param {string} strB
* @returns {bool}
*/

function isAnagram(strA, strB) {
  if(strA.length !== strB.length) return false;

  let aMap = {};
  let bMap = {};
  for(let char of strA) {
    aMap[char] = (aMap[char] || 0) + 1;
  }
  for(let char of strB) {
    bMap[char] = (bMap[char] || 0) + 1;
  }
  for (let char in bMap) {
    if(aMap[char] !== bMap[char]) return false;
  }
  return true;
}