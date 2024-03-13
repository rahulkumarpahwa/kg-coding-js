let taskList = [{ newTask: "open shop", newDate: "12 / 31 / 1999" }];
let task = document.querySelector("#inputTask");
let date = document.querySelector("#inputDate");
let container = document.querySelector("#taskContainer");
let newHtml = "";
displayCard();

function addCard() {
  // console.log(task.value);
  let completeTask = {
    newTask: task.value,
    newDate: date.value,
  };
  taskList.push(completeTask);
  task.value = "";
  date.value = "12 / 31 / 1999";
  displayCard();
}

function displayCard() {
  // console.log(taskList);
  newHtml = "";
  for (let i = 0; i < taskList.length; i++) {
    newHtml += `<div class="outputDiv" "> <p> ${taskList[i].newTask}</p> <p> ${taskList[i].newDate}</p> <button onclick="taskList.splice(${i}, 1); displayCard();">Delete</button></div>`;
  }
  container.innerHTML = newHtml;
}
