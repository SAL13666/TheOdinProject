import { Tasks, tasks } from "./task";
export function pickPriority(task,id) {
    let prio = tasks[id].priority;
    if(prio === "low") {
        console.log("low");
    } else if (prio === "medium") {
        console.log("medium");
    } else if (prio === "high") {
        console.log("high");
    }
}