//Activty 1

let num = 2;
if (num > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

let age = 24;
if (age >= 18) {
  console.log("eligible to vote");
} else {
  console.log("not eligible");
}

//Activity 2

let a = 2;
let b = 55;
let c = 99;
if (a > b) {
  if (a > c) {
    console.log("a is greatest num");
  } else {
    console.log("c is greatest");
  }
} else {
  if (b > c) {
    console.log("b is greatest num");
  } else {
    console.log("c is greatest");
  }
}

//Activty 3
let d = 5;
switch (d) {
  case 1:
    console.log("monday");
  case 2:
    console.log("tuesday");
  case 3:
    console.log("wednessday");
  case 4:
    console.log("thursday");
  case 5:
    console.log("friday");
  case 6:
    console.log("saturday");
  case 7:
    console.log("sunday");
}

let g = 4;
switch (g) {
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("c");
    break;
  case 6:
    console.log("D");
    break;
  case 5:
    console.log("e");
    break;
  case 4:
    console.log("E+");
    break;
  case 3:
    console.log("fail");
    break;
}

//Activty 4
let n = 24;
m = n % 2 == 0 ? "even" : "odd";
console.log(m);

//Activity 5

let year = 2000;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("leap year");
    } else {
      console.log("not leap year");
    }
  } else {
    console.log("not leap year");
  }
} else {
  console.log("leap year");
}
