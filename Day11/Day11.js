//Activity 1

//task 1-promise bnao jo ki 3 min baad reolve ho jaye
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("my name is mrigaank");
  }, 1000);
});

p.then((message) => {
  console.log(message);
});

//task 2-promise erro dega fr usko handle krenge catch se

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("my name is error");
  }, 2000);
});
p1.catch((err) => {
  console.log(err);
});

//Activty 2
//task3-chain bnani hai promises ki jo sever se data handle kre

const data1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("data from server 1");
  }, 3000);
});
const data2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("data from server 2");
  }, 4000);
});
const data3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("data from server 3");
  }, 5000);
});

data1
  .then((result) => {
    console.log(result);
    return data2;
  })
  .then((result) => {
    console.log(result);
    return data3;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

//Activity 3

//task 4-await function bnao fr uska result log krdo

const asf = async () => {
  const pro = new Promise((res, rej) => {
    setTimeout(() => {
      res("this is async function");
    }, 7000);
  });

  try {
    const da = await pro;
    console.log(da);
  } catch (err) {
    console.log(err);
  }
};
asf();

//task5-async ka reject mech
const asf1 = async () => {
  const pro = new Promise((res, rej) => {
    setTimeout(() => {
      rej("this is async eror");
    }, 7000);
  });

  try {
    const da = await pro;
    console.log(da);
  } catch (err) {
    console.log(err);
  }
};
asf1();

//Activity 4

//task 6-fetch apui se data ko log kro sever se
//first api hai bidu
fetch("https://api.restful-api.dev/objects")
  .then((res) => {
    if (!res.ok) {
      throw new Error("network is busy 404");
    }
    return res.json();
  })
  .then((dat) => {
    if (dat) {
      console.log(dat);
    }
  })
  .catch((err) => {
    console.log(err);
  });

//task 7-fetch api +async wait lagao

async function fetchapi(){
    try{
        const res=await fetch("https://api.restful-api.dev/objects?id=3&id=5&id=10");
        if(!res.ok){
            throw new Error("eror agaya bidu")
        }
        const data9=await res.json();
        if(data9){
            console.log(data9)
        }
    }catch(err){
        console.log(err)
    }
}
fetchapi()

//Activity 5

//task 8--promise bnao bhut saare aur ek sath resolve krne hai
const prom1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise 1")
    },5500)
})
const prom2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise 2")
    },4500)
})
const prom3=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise 3")
    },7500)
})
Promise.all([prom1,prom2,prom3])
.then((values)=>{
    console.log("all promised reolve");
    values.forEach((value,i)=>{
        console.log(`promise ${i+1}:${value}`)
    })
})

//task 9
Promise.race([prom1,prom2,prom3])
.then((winner)=>{
    console.log(`winner is ${winner}`)
})