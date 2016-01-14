

  var taskInput = document.getElementById("new-task"); //new-task
  var addButton = document.getElementsByTagName("button")[0]; //first button
  var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
  var completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks




  //New Task List Item
  var createNewTaskElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement("li");

  //input (checkbox)
  var checkBox = document.createElement("input"); // checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text

   //button.delete
  var deleteButton = document.createElement("button");
  //button.edit
  var editButton = document.createElement("button");
 
  
  //Each element needs modifying
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  deleteButton.className = "delete btn btn-default glyphicon glyphicon-trash";
  editButton.className = "edit btn btn-default glyphicon glyphicon-pencil";

  
  label.innerText = taskString;
  
  //Append each element
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);
  

  return listItem;
  }

  //Add a new task
  var addTask = function() {

  //If no value is etered, show alert with error-message. 

  if (taskInput.value === "") {

}
 
  else {
  console.log("Add task");
  //Create a new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);

  //Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEventsIncompleted(listItem, taskCompleted);
  
  }
    
  taskInput.value = "";
    
  }


  //Edit an existing task
  var editTask = function() {
  console.log("Edit task");

  var listItem = this.parentNode;
  
  var editInput = listItem.querySelector("input[type=text]");
  
  var label = listItem.querySelector("label");
  
  var containsClass = listItem.classList.contains("editMode");

  var button = listItem.querySelector("button.edit");
 



  //if the class of the parent is .editMode
  if(containsClass) {

    //Switch from .editMode
    //label text become the input's value
    label.innerText = editInput.value;
  

    } else {
    //Switch to .editMode
    //input value becomes the label's text
        
    editInput.value = label.innerText;
  

  }


    if (containsClass && label.innerText === "") {
   label.innerText != editInput.value;
  }

    else {
    label.innerText = editInput.value;
  
  //Toggle .editMode on the list item

  listItem.classList.toggle("editMode");
  button.classList.toggle("glyphicon-ok");

  
   }

  }


  //Delete an existing task
  var deleteTask = function() {
  console.log("Delete task");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  //Remove the parent list item from the ul
  ul.removeChild(listItem);
  }

  //Mark a task as complete

  var taskCompleted = function() {
  console.log("Task complete");
  //Append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  var editButton = listItem.querySelector("button.edit");
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");

  
  if(containsClass) {
    listItem.classList.remove("editMode");
    completedTasksHolder.appendChild(listItem);
    listItem.removeChild(editButton);
  }else {
  
  completedTasksHolder.appendChild(listItem);
  listItem.removeChild(editButton);

  }
  bindTaskEventsCompleted(listItem, taskIncomplete);

  }


  //Mark a task as incomplete
  var taskIncomplete = function() {
    console.log("Task incomplete");
  //Append the task list items to the #incomplete-tasks
  var listItem = this.parentNode;
  var editButton = document.createElement("button");
   editButton.className = "edit btn btn-default glyphicon glyphicon-pencil";
  
  incompleteTasksHolder.appendChild(listItem);
  listItem.appendChild(editButton);

  bindTaskEventsIncompleted(listItem, taskCompleted);
  }


  var bindTaskEventsIncompleted = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
 
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;


  //bind editTask to edit button
  editButton.onclick = editTask;
}


//a new function to bind events to the list of completed items (without edit-button)

  var bindTaskEventsCompleted = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var deleteButton = taskListItem.querySelector("button.delete");
  
 
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;

  }


  //Set the click handler to the addTask function
  addButton.addEventListener("click", addTask);


