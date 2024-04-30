// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

const s = "anagram",
  t = "nagaram";

var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  const sCount = {};
  const tCount = {};
  for (let val of s) {
    sCount[val] = sCount[val] + 1 || 1;
  }

  for (let val of t) {
    tCount[val] = tCount[val] + 1 || 1;
  }

  for (key in sCount) {
    if (sCount[key] != tCount[key]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram(s, t));
