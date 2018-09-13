// leet code https://leetcode.com/problems/isomorphic-strings/description/
// asset silly => false
// apple asset => true
// foo bar => false
// add egg => true


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let isoMap = {};
  for (let i = 0; i < s.length; i++) {
    // if the char in s is already a key in the isoMap
    if (isoMap[s[i]] !== undefined) {
      // and if the key does not have a value that matches the char in t
      if (isoMap[s[i]] !== t[i]) return false
      // or if the char at t is not already a value in the map
    } else if (Object.values(isoMap).includes(t[i])) {
      return false
    } else {
      // add the key/value to the map
      isoMap[s[i]] = t[i];
      // check again if the char from s maps to the correct letter in t
      if (isoMap[s[i]] !== t[i]) return false
    }
  }
  return true;
};