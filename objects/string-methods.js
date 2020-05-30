let name = '    Andrew Mead'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = "abc123password098"
console.log(password.includes("password"))

// Trim method
console.log(name.trim())


// isValidPassword
isValidPassword = (password) => {
    if (password.length > 8 && !password.includes('password')) {
        console.log ("Password is fine ")
    } else {
        console.log("min 8 charcaters or dont add password")
    }
    //Or
    // return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword("wererjkhkjh"))

console.log(isValidPassword("abc123!£$%"))

console.log(isValidPassword("asasaspassword"))