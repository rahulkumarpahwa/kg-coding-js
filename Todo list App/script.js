let taskList = [];
let task = document.querySelector("#task");
let date = document.querySelector("#date");
let p = document.querySelector("#p");
let button = document.createElement("button");
button.innerText = "delete";
let newHtml = "";

function addCard() {
  taskList.push(task.value + "  " + date.value);
  task.value = "";
  date.value = "";
  displayCard();
}

function displayCard() {
  console.log(taskList);
  p.innerHTML = "";
  p.innerHTML = `${taskList.join("\n")} &nbsp;  <button>Delete</button>  `;
}
