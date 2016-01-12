


//Add editbuttton only to the list of incompleted tasks

var removeEditButton = function() {
var listItem = this.parentNode;
var editButton = listItem.querySelector("button");

editButton.className = "edit btn btn-default glyphicon glyphicon-pencil";

var containsClassIncompleteTasks = listItem.classList.contains("incomplete-tasks");
  
  if(containsClassincompleteTasks) {
  
  listItem.appendChild(editButton);}
  else {
   
 listItem.removeChild(editButton);
    
  }

  }






//Remove edit-buttons from list of completed tasks
var top = document.getElementsByTagName("ul");
      var nested = document.getElementById("button");

      var garbage = top.removeChild(nested);






//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}



//html från mattias

<ul class="todos">

</ul>

<input type="text">
<button>Save</button>


//Local storage från mattias


var ul = $('.todos');
var input = $('input');
var button = $('button');

var renderList = function(todoItems) {
  ul.empty();
  for (var i = 0, len = todoItems.length; i < len; i++) {
    ul.append($('<li>', {'html': todoItems[i]}));
  }
};

var getTodoItems = function() {
	var todos = localStorage.getItem('todos');
  if (todos === null) {
  	todos = [];
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  var todoItems = JSON.parse(todos);
  return todoItems;
};

var setTodoItems = function(todoItems) {
	localStorage.setItem('todos', JSON.stringify(todoItems));
};

var updateTodos = function(value) {
	var todoItems = getTodoItems();
  todoItems.push(value);
  setTodoItems(todoItems);
  return todoItems;
};

button.on('click', function() {
  var val = input.val();
  var todoItems = updateTodos(val);
  renderList(todoItems);
});

$(document).ready(function() {
  var todoItems = getTodoItems();
	renderList(todoItems);
});





































listItem.appendChild(editButton);


   //bind editTask to edit button
  editButton.onclick = editTask;