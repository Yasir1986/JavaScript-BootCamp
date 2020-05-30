let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount : 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

let myObj = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}

console.log(`${myObj.name} is ${myObj.age} and lives in ${myObj.location}`)

myObj.age = myObj.age + 2

console.log(`${myObj.name} is ${myObj.age} and lives in ${myObj.location}`)
