const URL = "https://altcademy-to-do-list-api.herokuapp.com";
const apiKey = "api_key=294";

let tasks;

const getTasks = async () =>
  await fetch(URL + "/tasks?" + apiKey, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      tasks = data;

      console.log(data);
      return data;
    });

const sendTask = async (content) =>
  await fetch(URL + "/tasks?" + apiKey, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      task: {
        content: `${content}`,
        due: new Date(),
      },
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

getTasks()
  .then((data) => {
    tasksToDOM(data);
  })
  .catch((e) => console.log(e));

const deleteTask = async (id) => {
  console.log(typeof id);
  await fetch(URL + `/tasks/${id}?` + apiKey, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => res && console.log(`${id} deleted`));

  totalToDom();
};

updateTaskActive = async (id) => {
  await fetch(URL + `/tasks/${id}/mark_active?` + apiKey, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

updateTaskComplete = async (id) => {
  await fetch(URL + `/tasks/${id}/mark_complete?` + apiKey, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((d) => console.log("updated"))
    .catch((e) => console.log(e));
};
