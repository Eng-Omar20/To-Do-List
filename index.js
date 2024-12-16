const todoList = document.getElementById("todo-list");

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
  editButton.onclick = () => editTask(taskSpan);

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

function editTask(taskSpan) {
  const newTask = prompt("Edit your task:", taskSpan.textContent);
  if (newTask !== null) {
    taskSpan.textContent = newTask.trim();
  }
}

function deleteTask(listItem) {
  if (confirm("Are you sure you want to delete this task?")) {
    todoList.removeChild(listItem);
  }
}
