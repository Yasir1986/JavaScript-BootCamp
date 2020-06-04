// const myAge = 38
// const message  = myAge >=18 ? "You can vote!" : "You can not vote"

// if (myAge >= 18) {
//     message = "You can vote!"
// } else {
//     messgae = "You can not vote!"
// }

// console.log(message)

const myAge = 33
const showPage = () => {
    return ("Showing the page")
}
const showErrorPage = () => {
    return ("Showing the error page")
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Yasir', 'AKbar', 'TEST']

console.log(team.length <= 4 ? `Team size ${team.length}` : `Too many people in the team`)

