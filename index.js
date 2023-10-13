function isPalindrome(word) {
  // Write your algorithm here
  word = word.replace(/[^a-z]/g, '').toLowerCase();
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  The isPalindrome function checks if a string is a palindrome, which means that it reads the same forwards and backwards. 
  The function works by first removing any non-letter characters from the string and converting it to lowercase. 
  This ensures that the function is case-insensitive and can handle a wider range of inputs. Next, the function reverses the string and compares it to the original string. 
  If the two strings are equal, the function returns true. 
  Otherwise, the function returns false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
