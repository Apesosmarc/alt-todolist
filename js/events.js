submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target[0].value === "") return;

  sendTask(e.target[0].value).then((data) => {
    taskToDom(data.task);
    totalToDom();
  });

  submitForm[0].value = "";
});

clearBtn.addEventListener("click", () => {
  const checked = tasksId.querySelectorAll(".checked");

  checked.forEach((input) => {
    removeFromDOM(input);
    deleteTask(input.attributes.data.value);
  });
});
