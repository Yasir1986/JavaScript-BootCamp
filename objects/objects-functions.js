let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount : 326
}

let otherBook = {
    title: 'A People History',
    author: 'Howard Zinn',
    pageCount : 723
}

let getSummary = (book) => {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge

let convertFahrenheit = (fahrenheit) => {
    return {
        fahrenheit,
        kelvin: (fahrenheit + 459.67) * 5 / 9,
        celsius: (fahrenheit - 32) * 5 / 9
    }
}

let temps = convertFahrenheit(74)

console.log(temps.fahrenheit)
console.log(temps.celsius)
console.log(temps.kelvin)