class TaskEntry {
//name, blogText
  constructor (taskText){
    this.task_text = taskText
  }

}

function addTaskToTheToDoList() {
  //Create new blog entry
  var taskText = document.getElementById("taskEntryText").value;
  var taskEntry = new TaskEntry(taskText);

  //Add the new entry, name and date to the blog
  createTaskEntryElement(taskEntry);
  //Clear the inputs

}

function createTaskEntryElement(taskEntry) {  
  var taskText = taskEntry.task_text;
  var node = document.createElement("div");
  node.innerHTML = taskText;
  node.className = "taskEntry"; 
  taskDetails.appendChild(node);
}