//Activity 1
//task1
const key="mystringkey";
const value="myvalue";
localStorage.setItem(key,value)

const rerive=localStorage.getItem(key)
console.log(rerive)

//task2
const myObject = {
    name: "mrigaank sh",
    age: 19,
    email: "mrigaank@gmail.com"
};

// Save an object to localStorage by converting it to a JSON string
   const key1 = "myObjectKey";
   localStorage.setItem(key1, JSON.stringify(myObject));

// Retrieve the JSON string from localStorage and parse it back to an object
const retrievedString = localStorage.getItem(key1);
const retrievedObject = JSON.parse(retrievedString);

console.log("Retrieved Object:", retrievedObject);

//Activity 2
//task3--
