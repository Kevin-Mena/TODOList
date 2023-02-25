import './style.css';
// SELECT REQUIRED ELEMENTS
const todoInput = document.querySelector('#addlist');
const todoForm = document.querySelector('.todo-form');
const todoWrapper = document.querySelector('.wrapper');
const deleteCompleted = document.querySelector('.remove');
const addLocalStorage = (todo) => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

// ADD TODO
const addTodo = (e) => {
  e.preventDefault();
  const todo = todoInput.value;
  if (todo) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const id = todos.length + 1;
    const completed = false;
    addLocalStorage(id, todo, completed);
    const todoItem = document.createElement('div');
    todoItem.className = `todo-item${id}`;
    todoItem.setAttribute('id', 'new-todo');
    todoItem.innerHTML = `<input type="checkbox" class="todo-check">
          <input type="text" class="todo-text" value="${todo}" disabled>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>`;
    todoWrapper.appendChild(todoItem);
    todoInput.value = '';
  }
};
// REMOVE FROM LOCAL STORAGE
const removeLocalStorage = (id) => {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem('todos', JSON.stringify(todos));
};
// DELETE TODO
const deleteTodo = (e) => {
  if (e.target.classList.contains('delete')) {
    removeLocalStorage(e.target.parentElement.classList[1]);
    e.target.parentElement.remove();
  }
};

// CHECK TODO
const checkTodo = (e) => {
  if (e.target.className === 'todo-check') {
    const id = e.target.parentElement.classList[1];
    const isChecked = e.target.checked;

    if (isChecked) {
      e.target.nextElementSibling.style.textDecoration = 'line-through';
    } else {
      e.target.nextElementSibling.style.textDecoration = 'none';
    }
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = isChecked;
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

// GET TODO
const getTodo = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.className = `todo-item${todo.id}`;
    todoItem.innerHTML = `<input type="checkbox" class="todo-check" ${
      todo.completed ? 'checked' : ''
    }>
          <input type="text" class="todo-text ${
  todo.completed ? 'done' : ''
}" value="${todo}" disabled/>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>`;
    todoWrapper.appendChild(todoItem);
    todoInput.value = '';
  });
};
// REMOVE DONE TODOS
const removeDone = (e) => {
  if (e.target.classList.contains('remove')) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter((todo) => todo.checked === true);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoWrapper.innerHTML = '';
    getTodo();
  }
};

// EDIT LOCAL STORAGE
const editLocalStorage = (id) => {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.text = todo;
    }
    return todo;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

// EDIT TODO
const editTodo = (e) => {
  if (e.target.className === 'edit') {
    const todoText = e.target.parentElement.querySelector('.todo-text');
    const id = e.target.parentElement.classList[1];
    if (todoText.disabled) {
      todoText.disabled = false;
      e.target.textContent = 'Save';
    } else {
      todoText.disabled = true;
      e.target.textContent = 'Edit';
      editLocalStorage(id, todoText.value);
    }
  }
};

// EVENT LISTENER FOR TODO
todoForm.addEventListener('submit', addTodo);
todoWrapper.addEventListener('click', deleteTodo);
todoWrapper.addEventListener('click', checkTodo);
todoWrapper.addEventListener('click', editTodo);
window.addEventListener('DOMContentloaded', getTodo);
deleteCompleted.addEventListener('click', removeDone);
