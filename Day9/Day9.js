//Activity 1
//css change kri hai isme
const d=document.getElementById("name")
d.textContent="mrigaank sh";
d.style.backgroundColor="red"


const ch=document.getElementsByClassName("mk");

ch[0].style.backgroundColor="blue";

//Activity 2
//child bnaya hai 
let div=document.createElement("p");
let text=document.createTextNode("my name is mrigaank")
div.appendChild(text);
document.getElementById("micky").appendChild(div);
//element bnnayay hai
let li=document.createElement("li");
let t=document.createTextNode("sharma")
li.append(t);
document.getElementById("sh").appendChild(li)


//Activity 3
//attribute change kra hai
let s=document.getElementById("sh")
s.remove()
//element ka last child remove kiya hai
let n=document.getElementById("mks").children.length;
let a=document.getElementById("mks").children;
document.getElementById("mks").removeChild(a[n-1]);


//Activity 4
//image change kri hai
document.getElementById("img").src="113.jpg"

//css class ko remove ya add krna hai

document.getElementById("g").removeAttribute("href")
document.getElementById("g").setAttribute("href","goggle.com")


//Activty 5

//event listere lgayay hai jisse p ka content change ho gya hai
let b=document.getElementById("btn");
b.addEventListener("click",function(){
    document.getElementById("p").innerText="mrigaank";
})

//event listner lgayay hai mouse hover wala jisse css change ho rhi h

let k=document.getElementById("test")
k.addEventListener("mouseover",function(){
    k.style.backgroundColor="red";
})