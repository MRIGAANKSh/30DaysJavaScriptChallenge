//Activty 1

//task1-make function which give err0r and handle that error

function err(){
    if(n==2){
        console.log("num is 2")
    }
    else{
        throw new Error("error is there")
    }
}
try{
    err()
}catch(err){
   console.error(err)
}

//task 2
let a=23;
let b=0;
function div(a,b){
    if(b==0){
        throw new Error("deno is 0")
    }
    else{
        res=a/b;
        console.log(res)
    }
}
try{
    div(a,b)

}catch(div){
    console.error(div)
}

//Activty 2
//finally block method

function perform(){
try{
    //eror is be inside try block
    console.log("inside try b;lock")
    throw new Error("try eror")
}catch(error){
console.log(error.message)
}finally{
    console.log("inside finally block")
}
}
perform()

//Activity 3
//task4
class Aperr extends Error{
    constructor(message="something went wrong"){
        super(message)
    }
}
function samplex(){
    throw new Aperr("the error is implemented")
}
try{
    samplex()
}catch(err){
console.error("Error cuagh" ,err)
}

//task5

class inperr extends Error{
    constructor(message="input validation failed")
    {
        super(message)
        this.name="inputerror"
    }
}
function str(input){
    if(!input||input.trim===""){
        throw new inperr("input cannot be empty")
    }
    else{
        console.log(input)
    }
}
try{
    str()
}catch(err){
    if(err instanceof inperr){
        console.error("input error caught",err.message)
    }
    else{
        console.log(err)
    }
}

//Activity 4

const pro=new Promise((res,rej)=>{
    setTimeout(()=>{
        l=Math.random()
        if(l>=0.5){
            res("no error")
        }
        else{
            rej(new Error("erroror"));
        }
    },3000)
})
.then(result=>{
    console.log(l)
})
.catch(err=>{
    console.log("eroror is there",err.message)
})

//task7

const asf=async ()=>{
    const prom=new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(new Error("eror is there"))
        },5000)
    })

try{
    const dk=await prom;
    console.log(dk)
}catch(err){
    console.error(err)
}
}
asf()

//Activity 5
//task 8
fetch("https::/inclaiddmd.com")
.then((res)=>{
    res.json()
})
.catch((err)=>{
    console.error("inva;id url")
})

//task9

const url=async()=>{
    try{
        const res=await fetch("https://scbbcsb.com")
        let data=res.json();
        console.log(data)
    }catch(err){
        console.error("err")
    }
}
url()