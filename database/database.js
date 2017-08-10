class TaskEntry {
//name, blogText
  constructor (taskText){
    this.task_text = taskText
  }

}

var id = 0;

function addTaskToTheToDoList() {
  var taskText = document.getElementById("taskEntryText").value;
  var taskEntry = new TaskEntry(taskText);
  createTaskEntryElement(taskEntry);
}

function deleteTask() {
  var checks = document.getElementsByClassName("checkboxClass");
  var tasks = document.getElementsByClassName("taskEntry");

  var numChecked = 0;

  for (var i = 0; i < tasks.length; i++){
    var check = tasks[i];

    var c = check.getElementsByClassName("checkboxClass")[0];
    console.log(c)
    if (c.checked) {
      numChecked++;
    }
  }

  console.log(numChecked)

  while (numChecked > 0) {
      for (var i = 0; i < tasks.length; i++){
        var check = tasks[i].getElementsByClassName("checkboxClass");

        if (check.checked) {
          console.log("Deleting " + check);
          document.getElementById(check.id).remove();
          numChecked--;
        }
      }
  }
}

function createTaskEntryElement(taskEntry) {  
  var taskText = taskEntry.task_text;
  var node = document.createElement("div");
  node.id = id;

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkboxClass";

  node.innerHTML = taskText;
  node.className = "taskEntry"; 

  taskDetails.appendChild(checkbox);
  taskDetails.appendChild(node);
  id++;
}