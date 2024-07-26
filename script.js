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

    ["classList.add"]
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
  
    // Invoke the addTask function on DOMContentLoaded
    addTask();
  });


  document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Initialize and Load Tasks from Local Storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task));
  
    // Create the addTask Function
    function addTask() {
      // Retrieve and trim the value from the task input field
      const taskText = taskInput.value.trim();
  
      // Check if taskText is not empty
      if (taskText === "") {
        alert('Please enter a task.');
        return;
      }
  
      // Add the task to the tasks array
      tasks.push(taskText);
  
      // Update Local Storage
      localStorage.setItem('tasks', JSON.stringify(tasks));
  
      // Create and append the new task element to the DOM
      createTaskElement(taskText);
  
      // Clear the task input field
      taskInput.value = '';
    }
  
    // Create Task Element and Append to Task List
    function createTaskElement(taskText) {
      // Create a new li element
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      // Create a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
  
      // Assign an onclick event to the remove button
      removeButton.onclick = function() {
        // Remove the task from the tasks array
        tasks = tasks.filter(task => task !== taskText);
  
        // Update Local Storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
  
        // Remove the task element from the DOM
        taskList.removeChild(listItem);
      };
  
      // Append the remove button to the li element
      listItem.appendChild(removeButton);
      // Append the li to the taskList
      taskList.appendChild(listItem);
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