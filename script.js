const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

console.log(taskInput, addButton, tasks);

addButtom.addEventListener("click, addNewItem");

const items = [
  { value: "feed pickle", 
    complete: false
  },
  { value: "feed pickle", 
    complete: false
  },
  { value: "feed pickle", 
    complete: false
  },
  { value: "feed pickle", 
    complete: false
  },
  
];

for(let item of items) {
  createElementForTask(item);
}

function createElementForTask(item) {
  
}

function addNewItem() {
  console.log("you clicked the button");
}
