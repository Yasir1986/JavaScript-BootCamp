'use strict'

// Check for saved data in localStorage
const getSavedTodos = () => {
const todosJSON = localStorage.getItem('todos')

try {
    return todosJSON ? JSON.parse(todosJSON) : []
} catch (e) {
    return []
}

//Or
//return todosJSON !== null ? JSON.parse(todosJSON) : []

// Or
// if (todosJSON !== null) {
//     return JSON.parse(todosJSON)
// } else {
//     return []
//     }

}

// Save to do localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    // Use of Truth or Falsy 
    if (todo) {
        todo.completed = !todo.completed
    }
   
    //Or
    // if (todo !== undefined) {
    //     todo.completed = !todo.completed
    // }
}

// Render applications todos bases on filters
const renderTodos = function (todos, filters){
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ""
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDom(todo))
    })
}

// Get the DOM elements for an individual note
const generateTodoDom = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup to do checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup to do the text in the div
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup for button in div
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}