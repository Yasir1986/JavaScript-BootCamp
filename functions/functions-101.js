// Function - input, code, output {return value}

let greetUser =  () => {
    console.log('Welcome user!')   
}

greetUser()
greetUser()
greetUser()

let square = (num) => {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)


FahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let tempOne = FahrenheitToCelsius(32)
let tempTwo = FahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
