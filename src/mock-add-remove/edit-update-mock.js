import Storage from './mock-storage.js';

export const addToDo = () => {
  const toDoTask = [];
  const storage = new Storage();

  toDoTask.push(
    {
      description: 'first-task',
      completed: false,
      index: 0,
    },
    {
      description: 'second-task',
      completed: false,
      index: 1,
    },
  );
  storage.SetLocalStorage(toDoTask);
  return toDoTask;
};

export const formToDo = () => {
  let toDoTask = [];
  const storage = new Storage();
  toDoTask = storage.getLocalStorage();
  toDoTask.forEach((element) => {
    if (element.index === toDoTask.index) {
      element.description = 'Type your info here';
    }
    return element;
  });
  storage.SetLocalStorage(toDoTask);
  return toDoTask;
};

export const selectedDelete = () => {
  let toDoTask = [];
  const storage = new Storage();
  toDoTask = storage.getLocalStorage();
  toDoTask.completed = true;
  if (toDoTask.completed === true) {
    toDoTask = [];
  }
  storage.SetLocalStorage(toDoTask);
  return toDoTask;
};

export const tickboxCompleted = () => {
  let toDoTask = [];
  const storage = new Storage();
  toDoTask = storage.getLocalStorage();
  toDoTask.completed = true;
  if (toDoTask.completed === true) {
    toDoTask = {
      description: 'complete task',
      completed: true,
      index: 0,
    };
  }
  storage.SetLocalStorage(toDoTask);
  return toDoTask;
};

export const removeToDo = (id) => {
  let toDoTask = [];
  const storage = new Storage();
  toDoTask = storage.getLocalStorage();
  toDoTask.splice(id, 1);
  storage.SetLocalStorage(toDoTask);
  return toDoTask;
};

//  if (
//       localStorage.getItem('Task To-do') === null
//       || localStorage.getItem('Task To-do') === 'undefined'
//     ) {
//       return localStorage.setItem('Task To-do', JSON.stringify(todoTasks));
