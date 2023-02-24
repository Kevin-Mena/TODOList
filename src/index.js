import './style.css';
import TODO from './todoclass.js';

const form = document.querySelector('#new-todo-form');
const wrapper = document.querySelector('.wrapper');
const errMsg = document.querySelector('#errorMsg');
const todos = JSON.parse(localStorage.getItem('todos')) || [];
function showTodo(task) {
  wrapper.innerHTML += `
         <div class="todo-content">
          <div class="content-list">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <input type="text" class="todo-title" value="${task.description}" readonly></input>
            <div class="btn-container">
              <button class="edit"><i class="uil uil-ellipsis-v"></i></button>
              <button class="delete hide">
                <i class="uil uil-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
    `;
  const btnEdit = wrapper.querySelector('.edit');
  const btnDelete = wrapper.querySelector('.delete');
  btnDelete.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
    Storage.removeList();
    errMsg.style.display = 'block';
    errMsg.innerHTML = 'Deleted successfully!';
    errMsg.style.color = 'green';
    setTimeout(() => errMsg.remove(), 3000);
    form.reset();
    showTodo();
  });
  btnEdit.addEventListener('click', () => {
    btnDelete.classList.toggle('hide');
    const editList = wrapper.querySelector('input[type=text]');
    editList.readOnly = false;
    editList.focus();
    editList.addEventListener('blur', (e) => {
      editList.type = 'text';
      editList.setAttribute('readonly', true);
      wrapper.content = e.target.value;
      errMsg.style.display = 'block';
      errMsg.innerHTML = 'Edited successfully!';
      errMsg.style.color = 'green';
      setTimeout(() => errMsg.remove(), 3000);
    });
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = todos.length + 1;
  const todoInput = document.querySelector('#addlist').value;
  const newTask = new TODO(todoInput, false, id);
  if (todoInput === '') {
    errMsg.style.display = 'block';
    errMsg.innerHTML = 'Cannot add empty list!';
    errMsg.style.color = 'red';
  } else {
    todos.push(newTask);
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodo(newTask);
    form.reset();
    errMsg.style.display = 'block';
    errMsg.innerHTML = 'Added successfully!';
    errMsg.style.color = 'green';
    form.reset();
  }
  setTimeout(() => errMsg.display, 3000);
});
