import { addNewTask, renderTask, Task} from "./task";
export let projects = [];
let projectId;
class Project {
    constructor(name,id ,tasks = []) {
        this.name = name;
        this.tasks = tasks;
        this.id = id;
    }

    set setId(newId) {
        this.id = newId;
    }
    
    pushNewTask(task) {
        this.tasks.push(task);
    }
}

projects[0] = new Project("All", 0);
projects[1] = new Project("Today", 1);
projects[2] = new Project("Week", 2);
projects[3] = new Project("Complete", 3);

document.querySelector("main .add-task .add").addEventListener("click", () => {
    getProjectId()
    addNewTask(projects[projectId].tasks);
});

export function addNewProject() {
    document.querySelector(".Add-Project").addEventListener("click", () => {
        let addForm = document.createElement("form");
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        addForm.classList.add("add-project-form");
        addForm.innerHTML = `
                        <h3>add project</h3>
                <label for="title">Title<span>*</span></label>
                <input type="text" id="title" required>
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
        document.forms[0].remove();
        document.querySelector(".overlay").remove(); 
        let newProject = new Project(title,projects.length);
        projects.push(newProject);
        renderPorjects();
        renderPorjectTasks();
    })
})
}

export function renderPorjects() {
    let projectContainer = document.querySelector("aside nav ul");
    document.querySelectorAll("aside nav ul li.project").forEach(project => {
        project.remove();
    });
    projects.forEach((project, index) => {
            if(index >= 4) {
                let li = document.createElement("li");
                li.classList.add("project");
                li.innerHTML = `
                <p>${project.name}</p>
                <div class="delete"><i class="fa-regular fa-trash-can"></i></div>
                `;
                li.setAttribute("data-id", project.id);
                projectContainer.appendChild(li);
            }
        })
        deleteProject();
        renderPorjectTasks();

    }
    
    export let deleteProject = function() {
        document.querySelectorAll("li.project").forEach(project => {
            project.querySelector(".delete").addEventListener("click", () => {
                let id = project.getAttribute("data-id");
                projects.forEach((current,index) => {
                    if(current.id == id) {
                        projects.splice(index, 1);
                    }
                })
                projects.forEach((current,index) => {
                    current.setId = index;
                })
                project.remove();
                renderPorjects();
            })
        })
    }

    
    export function renderPorjectTasks() {
        document.querySelectorAll("aside nav ul li").forEach(project => { 
            project.addEventListener("click", () => {
            document.querySelectorAll("aside nav ul li").forEach(li => { 
                li.classList.remove("selected");
                project.classList.add("selected");
            });
            if(projects.length) {
                getProjectId();
                renderTask(projects[projectId].tasks);
            }
        })
    });
}

function getProjectId() {
    document.querySelectorAll("aside nav ul li").forEach(project => { 
        if(project.classList.contains("selected"))
        {
            projectId = project.getAttribute("data-id");
        }
    });
}

