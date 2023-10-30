//Create a function that checks if a given string is a palindrome using the split,
//reverse, and join array methods:
function checkPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(checkPalindrome("nitn"))
