//Activity 1 two sum leetcode easy
/**
 * Day 21 - LeetCode Easy
 * 
 * Activity 1 - Two Sum
 *  - Task 1: Solve the "Two Sum" problem on LeetCode.
 *      - Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
 *      - Log the indices for a few test cases.
 */
let found=true;
function twosum(a,target){
    for (let i = 0; i < a.length-2; i++) {
        const ele=a[i]
        for (let j = i+1; j < a.length; j++) {
            const ele2 = a[j];
            if(ele+ele2==target){
                return `ele =${a[i]} indices=${i} and ele2 =${a[j]} indices  =${j} target is ${target}`
                break
            }
            else{
                found=false;
            }
          
            
        }
        
    }
   
}

let a=[1,2,3,4]
let target=8
console.log(twosum(a,target))

//but my might be wrong----
// Function to find the indices of two numbers that add up to the target
const twoSum = (nums, target) => {
    // Create an empty object to store the numbers and their indices
    const map = {};

    // Loop through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (map[complement] !== undefined) {
            // Return the indices of the two numbers
            return [map[complement], i];
        }

        // Store the current number and its index in the map
        map[nums[i]] = i;
    }

    // Return [-1, -1] if no solution is found
    return [-1, -1];
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // Output: [-1, -1]