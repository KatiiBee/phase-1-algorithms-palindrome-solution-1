function isPalindrome(word) {
  const joinRevWord=word
  reversedWord=[...joinRevWord].reverse().join("")
  
  if(word===reversedWord) {
    return true
  }else return false
}

/* 
  Add your pseudocode here
*/
//function that takes a string input and runs it through and if else loop.
//the function contains a constant that takes the input and reverses it 
//if the word is equal to reversedWord then return true else return false
/*
  Add written explanation of your solution here
*/
//created a constant that takes the input word.
//the constant is the input that changes it into an array, then reverses the array and finally joins the array back into a string
//then the two strings are compared to see if they are equal
//if they are equal the if else loop will return true, otherwise it will return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  //console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  //console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("abc"));
}

module.exports = isPalindrome;
