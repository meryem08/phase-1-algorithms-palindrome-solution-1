function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

/* 
  Add your pseudocode here

  - Define a function named `reverseString` that takes a single parameter `word`.
    - Split the `word` into an array of characters.
    - Reverse the order of the characters in the array.
    - Join the reversed array of characters back into a string.
    - Return the reversed string.
  
  - Define a function named `isPalindrome` that takes a single parameter `word`.
    - Call the `reverseString` function to obtain the reversed version of `word` and store it in `reversedWord`.
    - Check if `word` is equal to `reversedWord`.
      - If they are equal, return `true` (indicating that `word` is a palindrome).
      - If they are not equal, return `false` (indicating that `word` is not a palindrome).
*/

/*
  Add written explanation of your solution here

   - The `reverseString` function takes a word, splits it into individual characters, reverses their order, and then rejoins them to create the reversed word.

  - The `isPalindrome` function uses `reverseString` to obtain the reversed version of the input word. It then compares the reversed word with the original word. If they are the same, it returns `true`, indicating that the input word is a palindrome. Otherwise, it returns `false`, indicating that the input word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("anna"));
  
}

module.exports = isPalindrome;

