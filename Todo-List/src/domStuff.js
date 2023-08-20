import { tasks, renderTask} from "./task";
export let markBookAsRead = function() {
    document.querySelectorAll("main .container .tasks .task").forEach(task => {
        task.querySelector(".task-data").addEventListener("click", () => {
            let id = task.getAttribute("data-id");
            if (tasks[id -1].status === 0) {
                tasks[id -1].status = 1;
            } else {
                tasks[id -1].status = 0;
            }
            renderTask(tasks);
        })
    })
}

export let deleteTask = function() {
    document.querySelectorAll("main .container .tasks .task").forEach(task => {
        task.querySelector(".delete").addEventListener("click", () => {
            let id = task.getAttribute("data-id");
            tasks.forEach((current,index) => {
                if(current.id == id) {
                    tasks.splice(index, 1);
                }
            })
            task.remove();
            upDateTheTaskCounter();
        })
    })
}


export function upDateTheTaskCounter() {
    document.querySelector(".add-task h3 span").innerHTML = tasks.length;
}