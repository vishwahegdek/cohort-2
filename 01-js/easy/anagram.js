/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  let arr1 = str1.split("")
  let arr2 = str2.split("");
  let ans =true;
  arr1.forEach(element => {
    if(!arr2.find(ele => ele===element)){
      ans = false;
    }
  });
  arr2.forEach(element => {
    if(!arr1.find(ele => ele===element)){
      ans = false;
    }
  });

  if(ans === true)  return true;
  else{return false}
}
str1 = "hello";
str2 = "lloHe"
console.log(isAnagram(str1, str2));

module.exports = isAnagram;
