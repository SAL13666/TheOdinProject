let grid = document.querySelector(".container");
let range = document.querySelector(".range input");
let color = document.querySelector(".pen-color input").value;

for(let i = 0; i < 16 * 16; i++)
{
    grid.appendChild(document.createElement("div"));
}

document.querySelector(".pen-color input").addEventListener("change", function() {
    color = document.querySelector(".pen-color input").value;
})

function etch() {
    document.querySelectorAll(".container div").forEach(function(div) {
        div.addEventListener("click", function() {
            div.style.cssText = `background-color: ${color};`;
        })
    })    
}

// need to change it from click to move
range.addEventListener("click", function() {
    let gridLength = document.querySelector(".range input").value;
    document.querySelector(".range label").textContent = `${gridLength}X${gridLength}`
    document.querySelectorAll(".container div").forEach(function(div) {
        div.remove();
    })
    for(let i = 0; i < gridLength * gridLength; i++)
    {
        grid.appendChild(document.createElement("div"));
    }
    grid.style.cssText = `grid-template-columns: repeat(${gridLength},1fr); grid-template-rows: repeat(${gridLength},1fr);`
    etch();
});

etch();