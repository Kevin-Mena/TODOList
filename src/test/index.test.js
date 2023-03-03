/**
 * @jest-environment jsdom
 */

import {
  addToDo,
  formToDo,
  tickboxCompleted,
  removeToDo,
  selectedDelete,
} from '../mock-add-remove/edit-update-mock.js';

import Storage from '../mock-add-remove/mock-storage.js';

const {
  addTodo,
  deleteTodo,
} = require('../mock-add-remove/add-remove-mock.js');

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
    deleteTodo();
    expect(todos.length).toBe(1);
  });
});

// Second section to test edit, update completed, clear all completed tasks

describe('edit, update completed, clear all completed tasks', () => {
  let storage;
  beforeEach(() => {
    storage = new Storage();
  });
  // 1st test starts here
  test('To check if it Edits a value', () => {
    localStorage.clear();
    addToDo('hey');
    formToDo('hey', 1);
    const todoTasks = storage.getLocalStorage();
    expect(todoTasks).toEqual(
      formToDo([
        {
          description: 'hey',
          completed: false,
          index: 0,
        },
      ]),
    );
  });
  // update completed test
  test('To check if it Updates a value', () => {
    addToDo('complete task');
    tickboxCompleted(1);
    const completedTask = storage.getLocalStorage();
    expect(completedTask).toEqual({
      description: 'complete task',
      completed: true,
      index: 0,
    });
  });
  //  Clear all completed test
  test('To check if it Clears and removes all completed tasks', () => {
    addToDo('task 1');
    selectedDelete(1);
    const many = storage.getLocalStorage();
    expect(many).toEqual([]);
  });

  // Testing Individual Task list removal
  test('To check if it removes individual selected item', () => {
    localStorage.removeItem('Task To-do');
    addToDo('Unit Tasting');
    const storageItem = storage.getLocalStorage();
    removeToDo('1');
    const itemAfterRemoval = storage.getLocalStorage();
    expect(itemAfterRemoval.length).toBe(storageItem.length - 1);
  });
});
