// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const strs = ["a"];

var longestCommonPrefix = function (strs) {
  let indx = 0;
  let str = "";
  while (1) {
    let char = strs[0].charAt(indx);
    if (!char) {
      console.log("");
      return;
    }
    for (let i = 0; i < strs.length; i++) {
      if (char != strs[i].charAt(indx)) {
        console.log(str);
        return str;
      }
    }
    str = str + char;
    indx += 1;
  }
};

longestCommonPrefix(strs);
