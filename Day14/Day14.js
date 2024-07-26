//Activity 1

//task1
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `hello ${this.name} `;
  }
  ques() {
    return `is your age is ${this.age}`;
  }
}
const person1 = new person("mrigaank ", 19);
console.log(person1);
console.log(person1.greet());

//task2

class person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `hello ${this.name} `;
  }
  ques() {
    return `is your age is ${this.age}`;
  }
  updateage(nage) {
    this.age = nage;
    console.log(`new age is ${this.age}`);
  }
}
const person2 = new person3("mrigaank ", 19);
console.log(person2.updateage(20));

//Activty 2

//task 3

class Student extends person {
  constructor(name, age, stdid) {
    super(name, age);
    this.stdid = stdid;
  }
  getstdid() {
    return this.stdid;
  }
}
const mks = new Student("mrigaank", 19, "2023CS174");
console.log(mks.getstdid());
//-------------------------------------------------------------------------------------
//task4
class Student1 extends person {
  constructor(name, age, stdid) {
    super(name, age);
    this.stdid = stdid;
    Student1.incc()
  }
  getstdid() {
    return this.stdid;
  }
  greet() {
    return `hello ${this.name} your stdid is ${this.stdid}`;
  }
  static incc() {
    if (!this.Student1Count) {
      this.Student1Count = 0;
    } 
      this.Student1Count ++
    
  }
  static getstdc() {
    return `${this.Student1Count}`;
  }
}
const mk2 = new Student1("bob", 19, "2023Cs!4&");
console.log(mk2.greet());

//Activity 3

//task5

class person4 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `hello ${this.name} `;
  }
  ques() {
    return `is your age is ${this.age}`;
  }
  updateage(nage) {
    this.age = nage;
    console.log(`new age is ${this.age}`);
  }
  static greeting() {
    return `hello dearones`;
  }
}
console.log(person4.greeting());

//task6
const std2=new Student1("mks",24,"23242424")
const std3=new Student1("mksh",24,"232424264")
console.log(Student1.getstdc())

//Activity 4

class pers{
    constructor(firstname,scdname,){
        this.firstname=firstname;
        this.scdname=scdname
    }
    greet(){
        return `hello ${this.firstname}`
    }
    get fullname(){
        return `${this.firstname} ${this.scdname}`
    }
    set fullname(name){
        const[firstname,scdname]=name.split(" ");
        this.firstname=firstname
        this.scdname=scdname
    }
}
const mri=new pers("mrigaank","sharma")
console.log(mri.fullname)
mri.fullname="mks sh"
console.log(mri.fullname)

//Activity 5(optional)

class Account{
    #balance
    constructor(balance){
        this.#balance=balance
    }
    get balance(){
        return (`balance is ${this.#balance}`)
    }
    deposit(amt){
        this.#balance+=amt
        return (`your amount is ${this.#balance}`)
    }
    withdraw(amt){
        this.#balance-=amt;
        return(`your amt is ${this.#balance}`)
    }
}

const acc=new Account(12000)
console.log(acc.balance)
console.log(acc.deposit(15000))
console.log(acc.withdraw(12000))