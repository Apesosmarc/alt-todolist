const totalToDom = () => {
  total.innerHTML = `Total Left: ${tasksId.children.length}`;
};

const taskToDom = (task) => {
  const t = `
        <h1>${task.content}</h1>
    `;

  const toDo = document.createElement("div");
  toDo.classList.add("task");
  let del = createTaskBtn(task);
  let active = createActiveBtn(task);

  tasksId.append(toDo);
  toDo.innerHTML = t;
  toDo.append(del);
  toDo.prepend(active);

  addListeners(del, active);
};
const addListeners = (del, active) => {
  del.addEventListener("click", (e) => {
    deleteTask(e.currentTarget.attributes.data.value);
    removeFromDOM(e.currentTarget);
  });

  active.addEventListener("click", (e) => {
    const id = e.target.attributes.data.value;
    if (e.target.checked) {
      updateTaskComplete(id);
      active.setAttribute("aria-label", "complete");
      active.classList.add("checked");
    } else {
      updateTaskActive(id);
      active.setAttribute("aria-label", "incomplete");
      active.classList.remove("checked");
    }
  });
};

const createTaskBtn = (task) => {
  const del = document.createElement("button");
  del.classList.add("delete");
  del.setAttribute("data", task.id);
  del.append("X");

  return del;
};

const createActiveBtn = (task) => {
  const active = document.createElement("input");
  active.setAttribute("type", "checkbox");
  active.setAttribute("data", task.id);
  active.classList.add("completed");

  if (task.completed) {
    active.checked = true;
    active.classList.add("checked");
    active.setAttribute("aria-label", "complete");
  } else {
    active.setAttribute("aria-label", "incomplete");
  }

  return active;
};

const tasksToDOM = ({ tasks }) => {
  tasks.forEach((task) => {
    taskToDom(task);
  });

  totalToDom(tasks);
};

const removeFromDOM = (btn) => {
  const deletedTask = btn.parentElement;

  deletedTask.remove();
};
