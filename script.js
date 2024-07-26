document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Create the addTask Function
    function addTask() {
      // Retrieve and trim the value from the task input field
      const taskText = taskInput.value.trim();
  
      // Check if taskText is not empty
      if (taskText === "") {
        alert('Please enter a task.');
        return;
      }
  
      // Task Creation and Removal
      // Create a new li element
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      // Create a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
  
      // Assign an onclick event to the remove button
      removeButton.onclick = function() {
        taskList.removeChild(listItem);
      };
  
      // Append the remove button to the li element
      listItem.appendChild(removeButton);
      // Append the li to the taskList
      taskList.appendChild(listItem);
  
      // Clear the task input field
      taskInput.value = '';
    }
  
    // Attach Event Listeners
    // Add an event listener to addButton
    addButton.addEventListener('click', addTask);
  
    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });