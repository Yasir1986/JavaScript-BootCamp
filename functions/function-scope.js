// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
 // Local scope (fahrenheit, celsius)
  // Local scope (isFreezing)

FahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

tempOne = FahrenheitToCelsius(32)
tempTwo = FahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
