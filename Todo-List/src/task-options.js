import {renderTask} from "./task";
import { projects, projectId} from "./projects";
import { pickPriority } from "./utility";
export let markBookAsRead = function(tasks) {
    document.querySelectorAll("main .container .tasks .task").forEach(task => {
        task.querySelector(".task-data").addEventListener("click", () => {
            let id = task.getAttribute("data-id");
            if (tasks[id -1].status === 0) {
                tasks[id -1].status = 1;
            } else {
                tasks[id -1].status = 0;
            }
            document.querySelector("main .container .tasks").innerHTML = "";
            renderTask(tasks);
        })
    })
}

export let deleteTask = function(tasks) {
    document.querySelectorAll("main .container .tasks .task").forEach(task => {
        task.querySelector(".delete").addEventListener("click", () => {
            let id = task.getAttribute("data-id");
            tasks.forEach((current,index) => {
                if(current.id == id) {
                    tasks.splice(index, 1);
                }
            })
            task.remove();
            upDateTheTaskCounter(tasks);
            projects[projectId].stringTasks = JSON.stringify(projects[projectId].tasks);
            localStorage.projects = JSON.stringify(projects);
        })
    })
}


export let editTask = function(tasks) {
    document.querySelectorAll("main .container .tasks .task").forEach(task => {
        task.querySelector(".edit").addEventListener("click", () => {
        let addForm = document.createElement("form");
        let overlay = document.createElement("div");
        let id = task.getAttribute("data-id") - 1;
        overlay.classList.add("overlay");
        addForm.classList.add("edit-task");
        addForm.innerHTML = `
                <h3>edit Task</h3>
                <label for="title">Title<span>*</span></label>
                <input type="text" id="title" required value="${tasks[id].title}">
                
                <label for="description">Description</label>
                <textarea name="Description" id="" cols="36" rows="3" id="description">${tasks[id].description}</textarea>
                
                <label for="date">Due Date</label>
                <input type="date" name="date" id="date" value="${tasks[id].dueDate}">
                
                <label for="priority">Priority</label>
                <select name="" id="priority" value="${tasks[id].priority}">
                <option value="" disabled selected>HOW Important is This Task?</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                </select>
                <div class="form-options">
                <button type="button">Cancel</button>
                <button type="submit">Add</button>
                </div>`
                addForm = pickPriority(tasks,addForm, id);
                document.querySelector("main").appendChild(addForm);
                document.body.appendChild(overlay);
                document.getElementsByTagName("button")[0].addEventListener("click", ()=> {
                    document.forms[0].remove();
        document.querySelector(".overlay").remove(); 
    })
    document.forms[0].addEventListener("submit", e => {
        e.preventDefault();
        tasks[id].title = document.forms[0].title.value;
        tasks[id].description = document.querySelector("textarea").value;
        tasks[id].dueDate = document.forms[0].date.value;
        tasks[id].priority = document.forms[0].priority.value;
        document.querySelector("main .container .tasks").innerHTML = "";
        renderTask(tasks);
        document.forms[0].remove();
        document.querySelector(".overlay").remove(); 
    })
    })

    })
}

export function upDateTheTaskCounter(tasks) {
    document.querySelector(".add-task h3 span").innerHTML = tasks.length;
}