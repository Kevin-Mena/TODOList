/* const { addTodo } = require("./util.js");
test("Add one item to the todos", () => {
  expect(addTodo()).toBe(true);
}); */

const { addTodo } = require("./src/index.js");
test("Add one todo to the todos", () => {
  document.body.innerHTML =
    "<div>" +
    '<input type="checkbox" class="todo-check"> id="addlist">' +
    "</div>";
  addTodo();
  const todo = document.querySelectorAll("#addlist");
  expect(todo).toHaveLength(1);
});
