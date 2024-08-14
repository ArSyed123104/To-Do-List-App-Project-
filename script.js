// script.js

document.getElementById('add-task').addEventListener('click', function() {
    let taskText = document.getElementById('new-task').value;
    
    if (taskText.trim() !== "") {
        let taskList = document.getElementById('task-list');

        // Create new list item
        let listItem = document.createElement('li');
        
        // Create task text element
        let task = document.createElement('span');
        task.textContent = taskText;
        
        // Create edit button
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        
        // Create delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Add event listener to edit button
        editButton.addEventListener('click', function() {
            let newTaskText = prompt("Edit your task:", task.textContent);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                task.textContent = newTaskText;
            }
        });
        
        // Add event listener to delete button
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        // Toggle task completion
        task.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });
        
        // Append task, edit, and delete buttons to list item
        listItem.appendChild(task);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        
        // Add the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        document.getElementById('new-task').value = '';
    }
});
