import "./style.css";
const myTasks = [
  {
    description: "Build no profit projects",
    completed: false,
    index: 0,
  },
  {
    description: "Nature walk",
    completed: false,
    index: 1,
  },
  {
    description: "Learn new languages",
    completed: false,
    index: 2,
  },
  {
    description: "Make pastries",
    completed: false,
    index: 3,
  },
];
class TodoList {
  static addMyTask(task) {
    const wrapper = document.querySelector(".wrapper");

    wrapper.innerHTML += `
        <div class="todo-content">
          <div class="content-list">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <p class="todo-title">${task.description}</p>
            <div class="btn-container">
              <button class="edit"><i class="uil uil-ellipsis-v"></i></button>
              <button class="delete hide">
                <i class="uil uil-trash-alt"></i>
              </button>
            </div>
          </div>
          </div><hr> 
    `;
  }
}
for (let i = 0; i < myTasks.length; i += 1) {
  TodoList.addMyTask(myTasks[i]);
}
