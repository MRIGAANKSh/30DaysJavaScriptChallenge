//Activty 1

for (let index = 1; index <= 10; index++) {
  const element = index;
  console.log(element);
}

for (let index = 0; index <= 10; index++) {
  const element = index;
  const prod = 5 * index;
  console.log(`5 * ${index}=${prod}`);
}

//Activity 2
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

let j = 10;
while (j > 0) {
  console.log(j);
  j--;
}

//Activity 3
let k = 1;
do {
  console.log(k);
  k++;
} while (k > 6);

//Factorial
let n = 10;
let fact = 1;
do {
  fact = fact * n;
  n--;
} while (n > 0);
console.log(fact);

//Activity 4
//pattern printing

for (let m = 0; m < 5; m++) {
  let row = "";
  for (let p = 0; p <= m; p++) {
    row += "*";
  }

  console.log(row);
}

//Activity 5

for (let index = 1; index <= 10; index++) {
  const element = index;
  if ((element == 5)) {
    continue;
  } else {
    console.log(element);
  }
}

for (let index = 1; index <= 10; index++) {
  const element = index;
  if ((element == 7)) {
    break;
  } else {
    console.log(element);
  }
}
