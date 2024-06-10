document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.innerText = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);

        taskInput.value = '';
    }
});
