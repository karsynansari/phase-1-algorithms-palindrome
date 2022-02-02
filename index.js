function isPalindrome(word) {
  let p = word.length -1; 
  for(let i=0; i<p/2 ; i++) {
    let f = word[i]; 
    let b = word[p-i] ; 
    if( f!=b) {
      return false
    }
    return true
  }
}

/* 
Iterate over the string arguement forwards and backwards 
  Use a loop 
If all forward and backwards characters match, true
If not, then not a palindrome 
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
