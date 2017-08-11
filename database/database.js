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
  var len = tasks.length;
  for (var i = 0; i < len; i++){
    console.log("length: "+len + " i: " +i);
    var check = checks[i];
    var task = tasks[i];
    if(task ==null){
      continue;
    }
    console.log(i+" is checked: "+ check.checked);
    if (check.checked) {
      console.log("index: "+i);
      check.remove();
      task.remove();
    }
  }


  // while (numChecked > 0) {
  //     for (var i = 0; i < tasks.length; i++){
  //       var check = tasks[i].getElementsByClassName("checkboxClass");

  //       if (check.checked) {
  //         console.log("Deleting " + check);
  //         document.getElementById(check.id).remove();
  //         numChecked--;
  //       }
  //     }
  // }
}

function createTaskEntryElement(taskEntry) {  
  var taskText = taskEntry.task_text;
  var node = document.createElement("span");
  var div = document.createElement("div");
  node.id = id;

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkboxClass";

  node.innerHTML = taskText;
  node.className = "taskEntry"; 

  taskDetails.appendChild(checkbox);
  taskDetails.appendChild(node);
  taskDetails.appendChild(div);
  id++;
}