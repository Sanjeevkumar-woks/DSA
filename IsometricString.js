// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

var isIsomorphic = function (s, t) {
  pArray = s.split("");
  sArray = t.split("");

  if (
    t.pArray != sArray.length &&
    [...new Set(pArray)].length != [...new Set(sArray)].length
  ) {
    return false;
  }
  const map = {};
  for (let i = 0; i < sArray.length; i++) {
    map[pArray[i]] = sArray[i];
  }
  for (let i = 0; i < sArray.length; i++) {
    if (map[pArray[i]] != sArray[i]) {
      return false;
    }
  }
  return true;
};
