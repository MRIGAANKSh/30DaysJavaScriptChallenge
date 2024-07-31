//Activity 1

//regular exp=------
//task1
const str1 = /Javascript/g;
let str =
  "javascript Is also Known as Javascript or Js and Javascript is Js and is 23 34 ,5 78 1990";
console.log(str.match(str1));

const str2 = /Js/g;
console.log(str.match(str2));
//task2-to match al the digit
const str3 = /\d/g;
console.log(str.match(str3));
//Activtiy 2
//task 3-match letter strat wth upper case
const regex = /\b[A-Z][a-zA-Z]*\b/g;
console.log(str.match(regex));
const regex2 = /\d+/g;
console.log(str.match(regex2));
//Activity 3

//task 5-to cap arecode localcode us code
const ph = "(123) 456-7890";
const regex3 = /\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/;
const match = ph.match(regex3);
if (match) {
  const [fullmatch, areacode, centralcode, lineranum] = match;
  console.log("fullmatch:",fullmatch);
  console.log("areaciode",areacode);
  console.log("cetralcode",centralcode);
  console.log("lineranum",lineranum);
}
//task6
let email="mrigaank@gmail.com"
const regex4=/^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/
console.log(email.match(regex4))
//task 7-match awor dif begin a strig
const regex5=/^\w+/
console.log(str.match(regex5))
//task8----
const regex6=/\w+$/;
console.log(str.match(regex6))


//Activity 5--practical application
//task 9-regex to validate simple exp
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const regex9 =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).+$/;
let password = "Password123!";
let password2 = "Password123";
console.log(regex9.test(password));
console.log(regex9.test(password2));

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const regex10 =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
let url = "https://www.example.com";
let url2 = "http://subdomain.example.co.uk/page";
let url3 = "Iamnoturl/";
console.log(regex10.test(url));
console.log(regex10.test(url2));
console.log(regex10.test(url3));


// Feature Request:
// 1. Basic Regex Script: Write a script that uses regular expressions to match simple patterns and log the matches.

// 2. Character Classes and Quantifiers Script: Create a script that uses regular expressions to match words with specific characteristics and log the matches.

// 3. Grouping and Capturing Script: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.

// 4. Assertions and Boundaries Script: Create a script that uses regular expressions to match words at specific positions in a string and log the matches.

// 5. Validation Script: Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.


// Achievement:
// By the end of these activities, you will:
// Understand and create basic regular expressions.
// Use character classes and quantifiers in regular expressions.
// Implement grouping and capturing in regular expressions.
// Apply assertions and boundaries in regular expressions.
// Use regular expressions for practical applications like validating passwords and URLs.