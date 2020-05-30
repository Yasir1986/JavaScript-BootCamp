// Check for saved data in localStorage
const getSavedTodos = function () {
const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    return JSON.parse(todosJSON)
} else {
    return []
    }
}

// Save to do localStorage
const saveTodos = function () {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render applications todos bases on filters
const renderTodos = function (todos, filters){
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ""
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDom(todo))
    })
}

// Get the DOM elements for an individual note
const generateTodoDom = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    return p
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}