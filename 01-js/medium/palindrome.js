/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let left = 0;
  str = str.toLowerCase();
  str = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,'')
  let arr = str.split("");
  arr = arr.filter(ele => ele.trim() !== "");
  console.log(arr)
  let right = arr.length-1
  result = true
  for(let i=0;i<(str.length/2)+1;i++){
    if(!(arr[left]===arr[right])){
      result=false;
    }
    left++
    right--
  }
  return result;
}
console.log(isPalindrome("Able, was I ere I saw Elba!"))
module.exports = isPalindrome;
