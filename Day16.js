//Activty 1

//task-factoril recursive func

function fac(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * fac(n - 1);
  }
}
console.log(fac(5));

//task2--fibo
function fibo(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}
console.log(fibo(7));

//Activity 2---------
//task3
function arr(a) {
  if (a.length == 0) {
    return 0;
  } else {
    return a[0] + arr(a.slice(1));
  }
}
a = [1, 2, 3, 4, 5, 3, 7];
console.log(arr(a));

//task4

function max(a, n) {
  if (n == 1) {
    return a[0];
  } else {
    const maxofrest = max(a, n - 1);
    return Math.max(a[n - 1], maxofrest);
  }
}
console.log(max(a, a.length));

//task5

function reverse(str) {
  if (str === "") {
    return "";
  } else {
    return str[str.length - 1] + reverse(str.slice(0, -1));
  }
}
console.log(reverse("mrigaank"));

//task6

function palindrome(str, strt, end) {
  if (strt >= end) {
    return true;
  }
  if(str[strt]!==str[end]){
    return false
  }
  return palindrome(str,strt+1,end-1)
}

function cpalindrome(str){
    console.log(palindrome(str,0,str.length-1))
}
const testcases=[
    "mkm",
    "mrigaank",
    "naman"
]
testcases.forEach((testcase,index)=>{
    console.log(`test case${index+1}is palidrome ${cpalindrome(testcase)}`)
})

//task7---binar srcgh

function binary(a,s,e,ele){
    if(s>e){
        return -1
    }
    const mid=Math.floor((s+e)/2)
    if(a[mid]===ele){
        return `eleemnet founda at ${mid}`
    }
    if(a[mid]>ele){
        return binary(a,mid-1,e,ele)
    }
    return binary(a,mid+1,e,ele)

}
function pbinary(a,ele){
    return binary(a,0,arr.length-1,ele)
}
const testcas=[
    {array:[1,2,3,4,4,5],target:4},
    {array:[23,4,4,5,2],target:23}
]
testcas.forEach((testc,index)=>{
    const {array,target}=testc
    const result=pbinary(array,target)
    console.log(result)
})

//task8

function occur(arr,target,index){
    if(index===arr.length){
        return 0;
    }
    const count=arr[index]===target?1:0;
    return count +occur(arr,target,index+1);
}
function getc(arr,target){
    return occur(arr,target,0)
}
const test=[
    {array:[1,2,3,4,7],target:3},
    {array:[12,3,3,4,4,5,2,7,7,88,2,2,2,22,3,3,],target:2}
]
test.forEach((tes,index)=>{
    const {array,target}=tes;
    console.log(`count:${getc(array,target)}`)
})