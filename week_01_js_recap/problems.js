// Reverse a string
/**
Input a string 
Output string in reverse 

EXAMPLE 
"pebble" => "elbbep"
"brooklyn" => "nylkoorb"

EDGE Cases 
"" => -1

- create a variable to hold the answer
- loop through in reverse, from the last character 
- push that character into the empty variable 
- return the populated variable 
 */
function reverseString(str) {
if (str === "") return -1

    let rString = ''
    for(let i = str.length-1; i >= 0; i--) {
        rString += str[i]
}   
    return rString 
}
  
// Find max in array
function findMax(arr) {

}

// Check if palindrome
function isPalindrome(word) {
    
}

module.exports = { reverseString, findMax, isPalindrome };