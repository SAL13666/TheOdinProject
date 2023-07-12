let grid = document.querySelector(".container");
let range = document.querySelector(".range input");
let color = document.querySelector(".pen-color input").value;


function removeActive(button, currentButton) {
    if (button != currentButton && !button.classList.contains("normal")) {
        button.classList.remove("active");
    }
}

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

document.querySelectorAll(".container div").forEach(function(div) {
        div.classList.add("border");
})

function etchWithColor() {
    document.querySelectorAll(".container div").forEach(function(div) {
        div.addEventListener("click", function() {
            div.style.cssText = `background-color: rgb(${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)});`;
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


document.querySelector(".clear button").addEventListener("click", function() {
    document.querySelectorAll(".container div").forEach(function(div) {
        div.style.cssText = "background-color: white;";
    })
});


document.querySelector(".eraser button").addEventListener("click", function() {
    document.querySelectorAll(".settings button").forEach(function (button) {
        removeActive(button, document.querySelector(".eraser button"));
    })
    document.querySelector(".eraser button").classList.toggle("active");
    color = "white";
    etch();
});

document.querySelector(".pen-mode button").addEventListener("click", function() {
    document.querySelectorAll(".settings button").forEach(function (button) {
        removeActive(button, document.querySelector(".pen-mode button"));
    })
    document.querySelector(".pen-mode button").classList.toggle("active");
    color = document.querySelector(".pen-color input").value;
    etch();
});


document.querySelector(".rainbow-mode button").addEventListener("click",function() {
    document.querySelectorAll(".settings button").forEach(function (button) {
        removeActive(button, document.querySelector(".rainbow-mode button"));
    })
    document.querySelector(".rainbow-mode button").classList.toggle("active");
    if (document.querySelector(".rainbow-mode button").classList.contains("active")) {
        etchWithColor();
    }
})

document.querySelector(".grid-mode button").addEventListener("click", function() {
    document.querySelector(".grid-mode button").classList.toggle("active");
    if(document.querySelector(".grid-mode button").classList.contains("active")) {
        document.querySelectorAll(".container div").forEach(function(div) {
            div.classList.add("border");
        })
    } else {
        document.querySelectorAll(".container div").forEach(function(div) {
            div.classList.remove("border")
        })
    }
})