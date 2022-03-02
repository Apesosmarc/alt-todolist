submit.addEventListener("submit", (e) => {
  e.preventDefault();

  sendTask(e.currentTarget[0].value).then((data) => {
    taskToDom(data.task);
    totalToDom();
  });

  submit[0].value = "";
});
