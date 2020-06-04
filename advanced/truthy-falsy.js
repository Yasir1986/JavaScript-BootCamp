const products = [{ name: "Computer mouse"}]
const product = products[0]

// Truthy - Values that resovle to true in boolean context
// Falsy - Values that resovle to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN
// Truthy values - [], objects 

if (product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

