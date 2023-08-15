export function renderHome() {
    let content = document.createElement("div");
    content.classList.add("main-content");
    content.innerHTML = `<h1>Welcome To The Restaurant</h1>`;
    return content
}