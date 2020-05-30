gradeCalc = (score, total) => {
    const percent = (score / total) * 100
    console.log(`You got ${score}% out of ${total}.`)
    if (percent >= 90  ) {
        return('You got A grade!')
    } else if (percent >= 80 ) {
        return('You got B grade!')
    } else if (percent >=70  ) {
        return('You got C grade!')
    } else if (percent >= 60 ) {
        return('You got D grade!')
    } else {
        return('You got F grade!')
    }
} 

const result = gradeCalc(80, 100)
console.log(result)