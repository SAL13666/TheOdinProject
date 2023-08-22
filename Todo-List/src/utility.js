import {tasks} from "./task";
export function pickPriority(task,id) {
    let prio = tasks[id].priority;
    if(prio === "low") {
        task.querySelectorAll("select option")[1].setAttribute("selected", "");
    } else if (prio === "medium") {
        task.querySelectorAll("select option")[2].setAttribute("selected", "");
    } else if (prio === "high") {
        task.querySelectorAll("select option")[3].setAttribute("selected", "");
    }
    return task;
}