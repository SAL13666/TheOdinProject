import "./CSS/styles.css"
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import {addNewTask} from "./task"
import {addNewProject} from "./projects"
(function() {
    addNewTask();
    addNewProject();
})();

