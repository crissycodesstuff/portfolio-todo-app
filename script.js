const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

console.log(taskInput, addButton, tasks);

addButton.addEventListener("click", addNewItem);
taskInput.addEventListener("keyup", processKeyPress)

const items = [];

for (let item of items) {
  const li = createElementForTask(item);
  tasks.appendChild(li);
}

function processKeyPress(event) {
  console.log(event.target.value.trim);
    addButton.disabled = event.target.value.trim() === "";
  
  if (event.key === "Enter" && !addButton.disabled) {
    addNewItem();
  }
}

function createElementForTask(item) {
  const template = document.getElementById("taskTemplate");
  const newListItem = template.content.cloneNode(true);
  
  const checkbox = newListItem.querySelector(".item-check");
  const text = newListItem.querySelector(".item-text");
  const deleteButton = newListItem.querySelector(".delete");
  
  
  text.innerText = item.value;
  checkbox.checked = item.complete;
  
  deleteButton.onclick = function (event) {
    event.target.closest('li').remove();
    items.splice(items.indexOf(item), 1);
    
  }
  
  return newListItem;
}

function addNewItem() {
  const task = {
    value: taskInput.value,
    complete: false
  };
  
  items.push(task);
  
  let newItem = createElementForTask(task);
  tasks.appendChild(newItem);
  
  taskInput.value = "";
  taskInput.focus();
}
