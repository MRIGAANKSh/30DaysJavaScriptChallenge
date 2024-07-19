//Activity 1
let book={
    title:"junglebook",
    author:"Rubyard Kipling",
    year:1998

}
console.log(book)

let a=book.title
let b=book.author
console.log(a,b)

//Activity 2

book.info=function info(){
     return (`${this.title} was written by ${this.author} in ${this.year}`)
    }
console.log(book.info())

book.updateyear=function updateyear(nyear) {
    return this.year=nyear;

    
}
console.log(book.updateyear(2005))
console.log(book)

//Activity 3

let booklib={
    namelib:"maxlib",
    books:[
    {
        title:"jungle book",
        author:"rubyard kipling"
    },
    {
        title:"tekken",
        author:"mrigaank sharma"
    }]
}
console.log(booklib)

console.log(booklib.namelib)
console.log(booklib.books.map((books)=>books.title))

booklib.method=function method(){
    return (`${this.books.map((books)=>books.title)} by ${this.books.map((books)=>books.author)}`)
}
console.log(booklib.method())

//Activity 5
for (const key in book) {
     {
        const element = book[key];
        console.log(element)
        
    }
}

console.log(Object.keys(book),Object.values(book))