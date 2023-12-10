/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count =0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    let arr = str.split("");
    arr.forEach(element => {
      const bool = vowels.find(item => item ===element)   
      if (bool) count+=1;
    });
    return count
}
console.log(countVowels("Hello"))

module.exports = countVowels;