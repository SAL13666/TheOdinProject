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

export let tasks = [];

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

export let addNewTask = function() {
        document.querySelector("main .add-task .add").addEventListener("click", () => {
        let addForm = document.createElement("form");
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        addForm.classList.add("add-task");
        addForm.innerHTML = `
                        <h3>add Task</h3>
                <label for="title">Title<span>*</span></label>
                <input type="text" id="title" required>
            
                <label for="description">Description</label>
                <textarea name="Description" id="" cols="36" rows="3" id="description"></textarea>
            
                <label for="date">Due Date</label>
                <input type="date" name="date" id="date">
            
                <label for="priority">Priority</label>
                <select name="" id="priority">
                    <option value="" disabled selected>HOW Important is This Task?</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <div class="form-options">
                    <button type="button">Cancel</button>
                    <button type="submit">Add</button>
                </div>`
        document.querySelector("main").appendChild(addForm);
        document.body.appendChild(overlay);
        document.getElementsByTagName("button")[0].addEventListener("click", ()=> {
        document.forms[0].remove();
        document.querySelector(".overlay").remove(); 
    })
    document.forms[0].addEventListener("submit", e => {
        e.preventDefault();
        let title = document.forms[0].title.value;
        let description = document.querySelector("textarea").value;
        let date = document.forms[0].date.value;
        let priority = document.forms[0].priority.value;
        let newTask = new Task(title,description,date,priority);
        tasks.push(newTask);
        renderTask(tasks);
    })
    })

}