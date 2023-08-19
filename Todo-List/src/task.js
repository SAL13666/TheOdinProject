export class Task {
    constructor(title, description, dueDate, priority, status = 0) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.notes = "";
    }
    addNote (note) {
        this.notes = note;
    }
}

export let renderTask = function(tasks) {
    let taskContainer = document.querySelector("main .container .tasks");
    taskContainer.innerHTML = "";
    tasks.forEach(task => {
    let newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
                    <div class="task-data">
                    <i class="fa-regular fa-circle"></i>
                    <p>${task.title}</p>
                </div>
                <div class="task-options">
                    <p>${task.dueDate}</p>
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-regular fa-trash-can"></i>
                    <i class="fa-solid fa-info"></i>
                </div>
    `;
    taskContainer.appendChild(newTask);
    });
}

