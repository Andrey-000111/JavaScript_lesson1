document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const downloadBtn = document.getElementById('downloadBtn');

    // Загрузка задач из localStorage
    loadTasks();

    // Добавление задачи
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Функция добавления задачи
    function addTask(taskText) {
        const tasks = getTasks();
        const taskId = Date.now();
        tasks.push({
            id: taskId,
            text: taskText
        });
        saveTasks(tasks);
        renderTasks(tasks);
    }

    // Функция загрузки задач
    function loadTasks() {
        const tasks = getTasks();
        renderTasks(tasks);
    }

    // Функция рендеринга задач
    function renderTasks(tasks) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.text;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Удалить';
            deleteBtn.addEventListener('click', () => {
                deleteTask(task.id);
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    // Функция получения задач из localStorage
    function getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    // Функция сохранения задач в localStorage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Функция удаления задачи
    function deleteTask(taskId) {
        const tasks = getTasks().filter(task => task.id !== taskId);
        saveTasks(tasks);
        renderTasks(tasks);
    }

   // Функция скачивания задач в формате Excel
downloadBtn.addEventListener('click', () => {
    const tasks = getTasks();
    let csvContent = "data:text/csv;charset=utf-8,uFEFF" // Добавляем BOM для UTF-8
        + "Задача\n"  
        + tasks.map(task => task.text).join("\n");

    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tasks.csv");
    document.body.appendChild(link); // Необходимо для Firefox

    link.click();
    document.body.removeChild(link); // Удаляем ссылку после скачивания
});

});
