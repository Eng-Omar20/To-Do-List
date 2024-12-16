const todoList = document.getElementById("todo-list");

const addBtn = document.getElementById("add-btn");
const updateBtn = document.getElementById("update-btn");

function addTask() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit";
  editButton.onclick = () => editTask(taskSpan, listItem);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  deleteButton.onclick = () => deleteTask(listItem);

  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);

  listItem.appendChild(taskSpan);
  listItem.appendChild(actionsDiv);

  todoList.appendChild(listItem);
  input.value = "";
}

let currentValue;

function editTask(taskSpan) {
  const input = document.getElementById("todo-input");

  addBtn.style.display = "none";
  updateBtn.style.display = "inline-block";

  currentValue = taskSpan;

  input.value = taskSpan.textContent;
}

function deleteTask(listItem) {
  if (confirm("Are you sure you want to delete this task?")) {
    todoList.removeChild(listItem);
  }
}

const updateTask = () => {
  const input = document.getElementById("todo-input");
  updateBtn.style.display = "none";
  addBtn.style.display = "inline-block";

  const updatedVal = input.value;

  currentValue.textContent = updatedVal;

  input.value = "";
};
