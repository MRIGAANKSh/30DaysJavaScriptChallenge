//Activty 1
let a = 223424;
function even(a) {
  if (a % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
even(a);
function sqr(a) {
  let sqr = a ** 2;
  console.log(sqr);
}
sqr(a);

//Activity 2

let b = 24;
function max(a, b) {
  if (a > b) {
    console.log("a is max", a);
  } else {
    console.log("b is max", b);
  }
}
max(a, b);

let str1 = "mrigaank ",
  str2 = "sharma";
function concate(str1, str2) {
  let str = str1 + str2;
  console.log(str);
}
concate(str1, str2);

//Activity 3

const sum = (a, b) => {
  sum1 = a + b;
  console.log(sum1);
};
sum(a, b);

const check = (str1) => {
  if (str1.includes("k")) {
    console.log(true);
  } else {
    console.log(false);
  }
};
check(str1);

//Activity 4
let i = 24;
function prod(i, l = 2) {
  let produ = i * l;
  console.log(produ);
}
prod(i);
let nm = "mrigaank";
function greeting(nm, age = 20) {
  console.log(`Hi, ${nm} is your age is ${age} ?,its nice`);
}
greeting(nm);

//Activity 5
 let j=3;
function funck(j) {
  console.log("hello");
}
function call(func, j) {
  for (let index = 1; index <= j; index++) {
    funck(j);
  }
}
call(funck(j), j);

//task10

function two(f1,f2,z) {
    v=f1(z)
    w=f2(v)
    console.log(w)
    
}
const f1=(z)=>{
    let s=2;
   
    return v=s+z
}
const f2=()=>{
    let q=2;
    return v+q
}
two(f1,f2,3)