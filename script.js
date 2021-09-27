const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

console.log(taskInput, addButton, tasks);

addButton.addEventListener("click", addNewItem);

const items = [
  { 
    value: "study js for 1 hour", 
    complete: false
  },
  { 
    value: "practice yog for 30 minutes", 
    complete: false
  },
];

for (let item of items) {
  const li = createElementForTask(item);
  tasks.appendChild(li);
}

function createElementForTask(item) {
  const template = document.getElementById("taskTemplate");
  const newListItem = template.content.cloneNode(true);
  
  const checkbox = newListItem.querySelector(".item-check");
  const text = newListItem.querySelector(".item-text");
  
  text.innerText = item.value;
  checkbox.checked = item.complete;
  
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
}
