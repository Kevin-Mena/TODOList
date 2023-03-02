/**
 * @jest-environment jsdom
 */

let element = document.createElement("div");
let ul = document.createElement("ul");
ul.setAttribute("id", "list");
element.appendChild(ul);
let todoInput = document.createElement("input");
todoInput.value = "Make videos";
let todos = [];
let todo = {
  completed: false,
  description: String,
};

// ADD TODO
const addTodo = () => {
  const value = todoInput.value;
  if (value) {
    todo.description = value;
    todos.push(todo);
    for (let i = 0; i < todos.length; i += 1) {
      todos[i].index = i + 1;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

const deleteTodo = (id) => {
  let filteredTodo = todos.filter((todo) => todo.index !== id);
  todos = filteredTodo;
  localStorage.setItem("todos", JSON.stringify(todos));
  return filteredTodo;
};

describe("Test add and delete", () => {
  test("Add a todo", () => {
    addTodo();
    expect(todos.length).toBe(1);
  });

  test("Delete a todo", () => {
    deleteTodo(1);
    expect(todos.length).toBe(0);
  });
});
