let tasks = [];

function addTask() {
    const taskDate = document.getElementById('taskDate').value;
    const taskInput = document.getElementById('taskInput').value;

    if (taskDate && taskInput) {
        tasks.push({ date: taskDate, task: taskInput });
        document.getElementById('taskInput').value = '';
        document.getElementById('taskDate').value = '';
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.date}</td>
            <td>${task.task}</td>
            <td>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </td>
        `;
        taskList.appendChild(row);
    });
}

function editTask(index) {
    const newDate = prompt("Enter new date (YYYY-MM-DD):", tasks[index].date);
    const newTask = prompt("Enter new task:", tasks[index].task);

    if (newDate && newTask) {
        tasks[index] = { date: newDate, task: newTask };
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
