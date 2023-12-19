const container = document.querySelector(".container");
const newTask = document.getElementById("new-task");
const submitBtn = document.getElementById("submit-btn");

submitBtn.onclick = function() {
  const taskId = "task-item-" + Date.now();
  const taskIdCompleted = "completed-" + Date.now();
  const tasksContainer = document.createElement("div");
  tasksContainer.className = "tasks";

  const label = document.createElement("LABEL");
  label.setAttribute("for", taskId);
  
  const taskItem = document.createElement("input");
  taskItem.type = "checkbox";
  taskItem.name = "task";
  taskItem.id = taskId;

  label.appendChild(taskItem);
  label.appendChild(document.createTextNode(newTask.value));
  tasksContainer.appendChild(label);
  
  taskItem.onclick = function() {
    if (taskItem.checked) {
      taskItem.id = taskIdCompleted;
      label.setAttribute("for", taskIdCompleted);
      label.classList.add("completed-label");
    } else {
      taskItem.id = taskId;
      label.setAttribute("for", taskId);
      label.classList.remove("completed-label");
    }  
    
    if (label.classList.length === 0) {
      label.removeAttribute("class");
    }
  } 

  const remove = document.createElement("button");
  remove.innerText = "x";
  remove.className = "remove";
  tasksContainer.appendChild(remove);

  remove.onclick = function() {
    tasksContainer.remove(container);
  }
  
  container.appendChild(tasksContainer);
}

