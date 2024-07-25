//Activity 1


//task1
const add=require("./sum.js")
const result=add(2,4)
console.log(result)

//task2

const obj=require("./person.js")
console.log(obj)

//Activity 2
//task 3
const {add2,div,sub} =require("./function.js")
console.log(div(4,2))
console.log(sub(4,2))

//task4 
const greet=require("./task4.js")
console.log(greet())

//Activity 3
//task5

const utils=require("./task5.js")
console.log("pi",utils.pi)
console.log("mul",utils.mul(99,100))


//Activity 4

//task6


const chunk = require("lodash/chunk.js")
let arr=[2,3,4,5,7,8]
let narr=chunk(arr,2)
console.log(narr)

//task 7

const axios=require("axios")

async function fetchgithub(){
    try{
        const res=await axios.get("https://api.github.com/users/MRIGAANKSh")
        console.log("user",res.data.login)
        console.log("public repo",res.data.public_repo)
        console.log("url",res.data.html_url)
    }catch(err){
        console.log(err)
    }
}
fetchgithub()

//Activity 5

//"-----"."moduleact5","------",