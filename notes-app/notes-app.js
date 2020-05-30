const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
      title: '',
      body: ''
    })
    savedNotes(notes)
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value)
})

// To save data on localStorage
  //localStorage.setItem('location', 'Nottingham')

  // To read/get data from localStorage
  //console.log(localStorage.getItem('location'))

  // To delete data from localStorage
  //localStorage.removeItem('location')

  // To clear everything from localStorage
  //localStorage.clear()

  // const user = {
  //   name: 'Andrew',
  //   age: 27
  // }
  // const userJson = JSON.stringify(user)
  // console.log(userJson)
  // localStorage.setItem('user', userJson)

  //const userJSON = localStorage.getItem('user')
  // const user = JSON.parse(userJSON)
  // console.log(`${user.name} is ${user.age}`)