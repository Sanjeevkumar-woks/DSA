// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

//aba cat cat cat dog;
//abba dog dog dog dog

var wordPattern = function (pattern, s) {
  pArray = pattern.split("");
  sArray = s.split(" ");
  if (
    pattern.length != sArray.length ||
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
