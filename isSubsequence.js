/* Multiple Pointers -- isSubsequence
Write a function called isSubsequence which takes two strings and checks whether the characters in the first string for a subsquence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. 
Time: O(n+m)
Space: O(1)
*/

function isSubsequence(strA, strB) {
  let i = 0;
  let j = 0;
  if (!strA) return true;
  while (j < strB.length) {
    if (strB[j] === strA[i]) i++;
    if (i === strA.length) return true;
    j++;
  }
  return false;
}

//with recursion

function isSubseqRec(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubseqRec(str1.slice(1), str2.slice(1));
  return isSubseqRec(str1, str2.slice(1));
}
