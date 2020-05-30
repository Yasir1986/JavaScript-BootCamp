const todos = [
    {
       text: "Order cat food",
       completed: false
    }, 
    {
        text: "Clean Kitchen",
        completed: true
    },
    {
        text: "Buy food",
        completed: true
    }, {
        text: "Do work",
        completed: false
    },  {
        text: "Excercise",
        completed: true
    }
]


const deleteTodo =(todos, todoText) => {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

//const found = todos.find(completed => completed === true)
//console.log(found)

const getThingsToDo = function (todos) {
    return todos.filter(function (todos, index) {
        return !todos.completed
    })
}

//Or 

// const found = todos.filter(todo => todo.completed === true)
// console.log(found)

//console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Do work')
// console.log(todos)

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
    } else if (!b.completed && a.completed) {
        return 1
    } else {
        return 0
        }
    })
}


sortTodos(todos)
console.log(todos)
