document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new_task_description");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(taskDescription.value);
    form.reset();
  });
});

function buildToDo(todo) {
  let todoContainer = document.createElement("div");
  todoContainer.className = "todo_container";
  let todoItem = document.createElement("p");
  todoItem.className = "todo_item";
  todoItem.textContent = todo;
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", handleDelete);
  todoContainer.appendChild(todoItem);
  todoContainer.appendChild(deleteBtn);
  document.querySelector("#tasks").appendChild(todoContainer);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
