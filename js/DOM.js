const totalToDom = () => {
  console.log(tasksId.children);
  total.innerHTML = tasksId.children.length;
};

const taskToDom = (task) => {
  const t = `
        <div data="${task.id}">
            ${task.content}
            ${task.id}

        </div> 
    `;

  const toDo = document.createElement("div");
  const del = document.createElement("button");

  del.setAttribute("data", task.id);
  del.append("X");

  tasksId.append(toDo);
  toDo.innerHTML = t;
  toDo.append(del);

  del.addEventListener("click", (e) => {
    deleteTask();
    removeFromDOM(e.currentTarget);
  });
};

const tasksToDOM = ({ tasks }) => {
  tasks.forEach((task) => {
    taskToDom(task);
  });

  totalToDom(tasks);
};

const removeFromDOM = (btn) => {
  const deletedTask = btn.parentElement;

  console.log(deletedTask);

  deletedTask.remove();
};
