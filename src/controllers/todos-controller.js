const todos = require("../data/todos")

// create functions for return todos and todos by user id

getAllTodos = () => {
    return todos
};

getTodosByUserId = (userId) => {
    return todos.filter(x => x.userId == userId)
};


module.exports = {
    getAllTodos,
    getTodosByUserId
};