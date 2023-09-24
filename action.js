/* JavaScript to handle adding, removing, marking tasks as complete, and local storage */

document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // code to retrieve tasks from localStorage
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Function to update the task list
  function updateTaskList() {
    taskList.innerHTML = ""; // Clear the current task list

    // Iterate through saved tasks and add them to the list
    savedTasks.forEach(function (task) {
      const taskItem = document.createElement("p");
      taskItem.innerHTML = `
          
          <img class="task-image" src="Resources/Ellipse 1.svg" />
          <label>${task.text}</label>
          
         
        `;

      // The event listener to delete the task when the delete button is clicked
      /*
      taskItem
        .querySelector("button.delete-button")
        .addEventListener("click", function () {
          const index = savedTasks.findIndex(
            (savedTask) => savedTask.text === task.text
          );
          if (index !== -1) {
            savedTasks.splice(index, 1); // Remove the task from the savedTasks array
            localStorage.setItem("tasks", JSON.stringify(savedTasks)); // Update localStorage
            updateTaskList(); // Update the displayed task list
          }
        });
        */

      // edit
      /*  const editBtn = li.querySelector(".editBtn");
      editBtn.addEventListener("click", () => {
        const updatedTask = prompt("Edit task:", task);
        if (updatedTask !== null) {
          task[index] = updatedTask;
          updateTaskList();
        }
      });
      */

      // use event listener to mark the task as complete
      /* taskItem
        .querySelector("input[type='checkbox']")
        .addEventListener("change", function () {
          taskItem.querySelector("label").style.textDecoration = this.checked
            ? "line-through"
            : "none";
          task.isComplete = this.checked;
          localStorage.setItem("tasks", JSON.stringify(savedTasks)); // Update localStorage
        });
        

      // Initialize the checkbox state and label style based on saved data
      if (task.isComplete) {
        taskItem.querySelector("input[type='checkbox']").checked = true;
        taskItem.querySelector("label").style.textDecoration = "line-through";
      }
      */

      taskList.appendChild(taskItem);
    });
  }

  // Initial update of the task list
  updateTaskList();

  // Event listener to add a new task
  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      savedTasks.push({ text: taskText, isComplete: false }); // Add the new task to the savedTasks array
      localStorage.setItem("tasks", JSON.stringify(savedTasks)); // Update localStorage
      updateTaskList(); // Update the displayed task list
      taskInput.value = ""; // Clear the input field
    }
  });
});
