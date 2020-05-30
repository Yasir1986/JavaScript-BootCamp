let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

// addEpense
let addExpense = (account, amount) => {
    account.expenses = account.expenses + amount
}

// addIncome
let addIncome = (account, income) => {
    account.income = account.income + income
}

// resetAccount
let resetAccount = (account) => {
    account.expenses = 0,
    account.income = 0
}

// getAccountSummary
let getAccountSummary = (account) => {
    let balance = account.income - account.expenses
    let temp = `Account for ${account.name} has $${balance}, $${account.income} in income. $${account.expenses} in expenses.`
    return temp   
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
