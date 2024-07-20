//Activty 1
let age=19;
let pname="micky"
console.log(`my name is ${pname} and my age is ${age}`)
let cot="india"
let a=`my name is ${pname} and my age is ${age}.
i belong to ${cot}`
console.log(a)

//Activity 2

let arr=[1,2,3,4,5,"mrigaank",7,8]
const [l,m]=arr;
//const l=arr[0],m=arr[arr.length-1];
console.log(l,m)

let book={
    title:"jungle book",
    price:120

}
const {title,price}=book;
console.log(title)
console.log(price)

//Activity 3

let g=[...arr,"mks","sharms"]
console.log(g)

function sum(...num){
    return num.reduce((a,b)=>a+b,0)
}
console.log(sum(1,2,3,4,5))
//Activity 4
function prod(a,b=2){
    return a*b;
}
console.log(prod(2,4))
console.log(prod(2))
//Activity 5
let s="mrigaank"
let d="sharms"
let sk=24;
let person={
    s,
    d,
    sk,
    greet(){
        return `hello ${s}`
    },
    greet2(){
        return `hello ${s} ${d}`
    }
}
console.log(person)
console.log(person.greet())
console.log(person.greet2())


key1="name"
key2="age"
let p={
    [key1]:"mrigaank",
    [key2]:19
}
console.log(p)