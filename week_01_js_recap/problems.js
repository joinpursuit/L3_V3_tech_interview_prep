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
/**
Input an array of numbers
Output the max number in the array 

EXAMPLE
[5,10,11,25,9] => 25
[1,31,26,99,6,25] => 99

EDGE Cases 
[] => -1

- create a variable equal to the first number in the array, to hold the max number 
- loop through each number in the array, from the second number 
    - if the number in the array is greater that the variable set to 0, update the variable to the current number 
- return the variable after it's compared all the numbers 
 */
function findMax(arr) {
if(arr.length === 0) return -1

let max = arr[0]
for(let i = 1; i < arr.length; i++)
    if(arr[i] > max){
        max = arr[i]
    }
    return max
}

// Check if palindrome
/**
Input a word 
Output true if the word is the same forward and backward, false it not 

EXAMPLE 
"racecar" => true
"book" => false

EDGE Case 
"" => -1

- create a variable to hold the reverse version of the word 
- loop through the word from the last character
    - add each letter from the loop to the variable 
    - if the variable is equal to the word 
        - return true 
- return false
 */
function isPalindrome(word) {
if(word.length === 0) return -1

let reverseW = ""
for(let i = word.length-1; i >= 0; i--){
    reverseW += word[i]
    
}
   return reverseW === word
}

module.exports = { reverseString, findMax, isPalindrome };