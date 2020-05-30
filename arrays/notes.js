const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habbits to work on",
    body: "Excercise. Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
            return -1
    } else if (b.title.toLocaleLowerCase() < a.title.toLocaleLowerCase()) {
        return 1
    } else {
        return 0
        }
    })
}


// to find in a array
const findNote = function(notes, noteTitle) {
    const note = notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return note
}

const findNotes = function (notes, query) {
    const filterNotes = notes.filter(function (note,index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLocaleLowerCase()) 
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        return isTitleMatch || isBodyMatch
    })
    return filterNotes
}

// console.log(findNotes(notes, 'eating'))

// const note = findNote(notes, 'some office modification')
// console.log(note)

sortNotes(notes)
console.log(notes)