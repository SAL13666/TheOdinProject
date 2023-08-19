import "./CSS/styles.css"
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

(function() {
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
    })

})();

