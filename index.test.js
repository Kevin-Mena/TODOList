/**
 * @jest-environment jsdom
 */

const {
  addTodo,
  deleteTodo,
} = require('./src/mock-add-remove/add-remove-mock.js');

const todos = [
  {
    description: "Understanding API's",
    completed: false,
    index: '1',
  },
];

describe('Test add and delete tasks', () => {
  test('Add a todo', () => {
    addTodo();
    expect(todos.length).toEqual(1);
  });

  test('Delete a task todo', () => {
    deleteTodo(1);
    expect(todos.length).toBe(1);
  });
});
