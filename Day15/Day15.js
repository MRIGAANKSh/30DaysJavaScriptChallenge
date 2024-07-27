//Activity 1

//task1-----
function outerfuc() {
    let outv="i am outside"
    function inerfuc() {
        console.log(outv)
    }
    return inerfuc;
}
const iner=outerfuc()
iner()

//task2-closure
function createcoumter(){
    let c=0
    return{
        inc:function(){
            c++
        },
        dec:function(){
            c--
        },
        get:function(){
            return c
        }

    }
}
const cr=createcoumter();
cr.inc()
console.log(cr.get())

//Activity 2
//task3----
function unqid(){
    let lastid=0;
    return function(){
        lastid++;
        return lastid
    }
}
const id=unqid()
id()
id()
console.log(id())
//tsk4----
function greet(name){
    let n=name
    return{
        greet:function(){
            return `hello ${n}`
        }
    }
}
const c=greet("mrigaank")
console.log(c.greet())

//Activity 3

//task 5-make aaray of func

let funcarr=[]
for (let i = 0; i < 5; i++) {
    funcarr[i]=(function(i){
        return function(){
            console.log(i)
        }
    })(i);
    
}

funcarr[0]();
funcarr[1]()

//Activity 4
//task6

const itemm=(function(){
    let items=[]
    return {
        add:function(item){
            items.push(item)
        },
        remove:function(item){
            const i=items.indexOf(item)
            if(i>-1){
                items.splice(i,1);
            }
        },
        listitem:function(){
            return items.slice()
        }
    }
})()

itemm.add("item1")
itemm.add("item2")
console.log(itemm.listitem())
itemm.remove("item2")
console.log(itemm.listitem())


//Activity 5--memorization

function memo(fn){
    const cache=[]
    return (n)=> {
        if(n in cache){
            console.log("fecthig from cache")
            return cache[n]
        }
        else{
            console.log("calc result")
            const result=fn(n)
            cache[n]=result
            return result
        }
    }
}

//task8=----=-=-
function memof(){
    const cah={}
function fac(n){
    if (n===0){
        return 1
    }
    if(cac[n]){
        return cac[n]
    }
    else{
        return n*fac(n-1)
        cac[n]=result;
        return result
    }
    return fac();
}}

const meme=memof();
console.log(meme(5))