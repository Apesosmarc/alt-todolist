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

getTasks().then((data) => {
  tasksToDOM(data);
});
