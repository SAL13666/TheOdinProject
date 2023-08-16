import './style.css';
import { renderHome } from './home';
import { renderMenu } from './menu';

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
