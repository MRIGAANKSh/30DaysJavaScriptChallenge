//Activity 1

let a=[1,2,3,4,5,"mrigaank"]
console.log(a,typeof(a))
let k=a.length
let b=a[0],c=a[k-1]
console.log(b,c)

//Activty 2

a.push(24)
console.log(a)

a.pop()
console.log(a)

a.shift()
console.log(a)

a.unshift(2005)
console.log(a)

//Activty 3
const d=[1,2,3]
l=d.map(i=>i*2);
console.log(l)

g=d.filter(i=>i%2==0)
console.log(g)
f=d.reduce((sum,i)=>{
    return sum+i
})
console.log(f)

//Activity 4


for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}
d.forEach(element => {
    console.log(element)
    
});

//Activity 5

const arr1=[[1,2] ,[3,4]]
console.log(arr1)

mks=arr1[1][1]
console.log(mks)