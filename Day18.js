//Algorithms-----

//Activity 1
//task1
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("-----Bubble Sort-----")
console.log('Sorted array:', bubbleSort(numbers));

//Task 2:Implement the Selection sort algorithm to sort an array of numbers in ascending order.

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}
console.log("-----Selection Sort-----")
console.log('Sorted Array:',selectionSort(numbers))

//Task 3: Implement the Quick sort algorithm to sort an array of numbers in ascending order.

function quickSort(arr) {
    function partition(low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    function quickSortRecursive(low, high) {
        if (low < high) {
            let pivotIndex = partition(low, high);
            quickSortRecursive(low, pivotIndex - 1);
            quickSortRecursive(pivotIndex + 1, high);
        }
    }
    quickSortRecursive(0, arr.length - 1);

    return arr;
}

console.log("-----Quick Sort-----")
console.log('Sorted array:', quickSort(numbers));

//Activty 2
//task4-liner search


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`Target value ${target} found at index ${i}`);
            return i; // Return the index of the target value
        }
    }
    console.log(`Target value ${target} not found in the array.`);
    return -1;
}

const number = [10, 23, 4, 7, 30, 15];
const target = 7;
console.log("-----Linear Search-----");
linearSearch(number, target);



function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            console.log(`Target value ${target} found at index ${mid}`);
            return mid; // Return the index of the target value
        }
        if (arr[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    console.log(`Target value ${target} not found in the array.`);
    return -1;
}
console.log("-----Binary Search-----");
binarySearch(number, target);

//Activity 3: String Algorithms

//Task 6: Write a fun to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrences(str) {
    const charCounts = {};
    for (let char of str) {
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }
    console.log('Character counts:', charCounts);
    return charCounts;
}

const inputString = "hello world";
console.log(" ")
countCharacterOccurrences(inputString);



//Task 7: Write a fun to find the longest substring without repeating  character in a string. Log the character counts.

function longestSubstringWithoutRepeating(s) {
    let start = 0;
    let maxLength = 0;
    let maxSubstring = '';
    const charIndexMap = {}; 

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = end;
        const currentLength = end - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxSubstring = s.substring(start, end + 1);
        }
    }

    console.log('Longest substring without repeating characters:', maxSubstring);
    console.log('Length of the longest substring:', maxLength);

    return maxSubstring;
}

const inputStrings = "abcabcbb";
console.log(" ")
longestSubstringWithoutRepeating(inputStrings);


//Activity 4: Array Algorithms

//Task 8: Write a function to rotate an array by k positions. Log the rotated array.



function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 

    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
    console.log('Rotated array:', arr);
}

const numberss = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(numberss, k);

//Task 9: Write a function to merge two sorted an array into one sorted array . Log the merged array.

function mergeSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let mergedArray = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log('Merged array:', mergedArray);
    return mergedArray;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
mergeSortedArrays(array1, array2);

