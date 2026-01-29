// =======================
// Simple Todo using Array
// =======================

let todos = [];

// add todo
function addTodo(task) {
  todos.push(task);
  console.log("Added:", task);
}

// update todo
function updateTodo(index, newTask) {
  if (todos[index] === undefined) {
    console.log("Invalid index");
    return;
  }
  todos[index] = newTask;
  console.log("Updated:", newTask);
}

// remove todo
function removeTodo(index) {
  if (todos[index] === undefined) {
    console.log("Invalid index");
    return;
  }
  todos.splice(index, 1);
  console.log("Removed todo");
}

// clear all todos
function clearTodos() {
  todos.length = 0;
  console.log("All todos cleared");
}

// show todos
function showTodos() {
  console.log("Todos:", todos);
}

addTodo("Coding for 4 hours");
addTodo("Reading a book");
showTodos();