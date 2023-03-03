export default class Storage {
  // eslint-disable-next-line class-methods-use-this
  getLocalStorage() {
    const todoTasks = [];
    if (
      localStorage.getItem('Task To-do') === null
      || localStorage.getItem('Task To-do') === 'undefined'
    ) {
      return localStorage.setItem('Task To-do', JSON.stringify(todoTasks));
    }
    return JSON.parse(localStorage.getItem('Task To-do'));
  }

  // eslint-disable-next-line class-methods-use-this
  SetLocalStorage(array) {
    return localStorage.setItem('Task To-do', JSON.stringify(array));
  }
}
