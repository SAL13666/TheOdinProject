export let projects = [];
class Project {
    constructor(name,id ,tasks = []) {
        this.name = name;
        this.tasks = tasks;
        this.id = id;
    }
}


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
    })
    })
}

export function renderPorjects() {
    let projectContainer = document.querySelector(".projects ul");
    projectContainer.innerHTML = "";
    projects.forEach(project => {
        let li = document.createElement("li");
        li.innerText = project.name;
        li.setAttribute("data-id", project.id);
        projectContainer.appendChild(li);
    })
}