let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: "byEdited",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  const id = uuidv4();
  const timestamp = moment().valueOf();
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  savedNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// Moment Date and Time
// const now = moment()
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

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
