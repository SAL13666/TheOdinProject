import './style.css';
import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderAbout } from './about';
let content = document.getElementById("content");
let header = document.createElement("header");
    header.innerHTML = `
    <h1>Restaurant Page</h1>
    <ul>
    <li class="home">home</li>
    <li class="menu">menu</li>
    <li class="about">about</li>
    </ul>
    `;
let renderHeader = function () {
    content.appendChild(header);
}
renderHeader();
content.appendChild(renderHome());

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        content.innerHTML = "";
        renderHeader();
        content.appendChild(renderHome());
    })

    document.getElementsByClassName("menu")[0].addEventListener("click", () => {
        content.innerHTML = "";
        renderHeader();
        content.appendChild(renderMenu());
    })

        document.getElementsByClassName("about")[0].addEventListener("click", () => {
        content.innerHTML = "";
        renderHeader();
        content.appendChild(renderAbout());
    })
