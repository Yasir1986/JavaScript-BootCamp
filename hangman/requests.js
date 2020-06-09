const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((resposne) => {
        if (resposne.status === 200) {
            return resposne.json()
        } else {
            throw new Error ('Unbale to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle 
    })
}

const getCountry = (countryCode) => {
   return fetch('http://restcountries.eu/rest/v2/all')
    .then((resposne) => {
        if (resposne.status === 200) {
            return resposne.json()
        } else {
            throw new Error ('Unable to fetch countries API')
        }
    }).then((data) => {
        return country = data.filter((country) => country.alpha2Code === countryCode)
        
    })
}
