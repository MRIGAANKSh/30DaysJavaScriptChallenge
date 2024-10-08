//Activity3-palindrome number

function reverse(a) {
  let n, k=a , rev = 0;
  while (k != 0) {
    n = k% 10;
    rev = rev * 10 + n;
    k= parseInt(k / 10);
  }
  if (rev === a) {
    return "num is plaindrome";
  } else {
    return "number is not palindrome";
  }
}
console.log(reverse(22));
//other way
/**
 * Day 21 - LeetCode Easy
 * 
 * Activity 3 - Palindrome Number
 *  - Task 3: Solve the "Palindrome Number" problem on LeetCode.
 *    - Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
 *    - Log the result for a few test cases, including edge cases like negative numbers.
 */


// Function to check if a number is a palindrome
const isPalindrome = (num) => {
    // Check if the number is negative
    if (num < 0) {
        return false;
    }

    // Initialize the reversed number
    let rev = 0;
    let originalNum = num;

    // Loop until the number becomes 0
    while (num != 0) {
        // Get the last digit of the number
        let lastDigit = num % 10;

        // Update the reversed number 
        rev = rev * 10 + lastDigit;

        // Remove the last digit from the number
        num = parseInt(num / 10);
    }

    // Check if the reversed number is equal to the original number
    return rev === originalNum;
};

// Test cases
console.log(isPalindrome(121));   // Output: true
console.log(isPalindrome(-121));  // Output: false
console.log(isPalindrome(10));    // Output: false
console.log(isPalindrome(11111));   // Output: true
console.log(isPalindrome(-101));  // Output: false