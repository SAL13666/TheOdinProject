import { tasks, renderTask} from "./task";
export let markBookAsRead = function() {
    document.querySelectorAll("main .container .tasks .task").forEach(task => {
        task.addEventListener("click", () => {
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