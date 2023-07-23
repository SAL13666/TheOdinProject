let menuButton = document.querySelector("button.menu");
let form = document.querySelector("form");
let after = document.querySelector("form h3");
let modeButton = document.querySelector("button.mode");
let overlay = document.querySelector(".overlay");
let pass = document.getElementById("password").addEventListener("blur", function () {
    pass = this.value;
})
let submit = document.querySelector("form > button");


menuButton.addEventListener("click",function() {
    form.style.cssText = "display:block;";
    menuButton.style.cssText = "display:none;";
});

after.addEventListener("click", function() {
    form.style.cssText = "display:none;";
    menuButton.style.cssText = "display:block;";
})

modeButton.addEventListener("click",function() {
    overlay.classList.toggle("white-mode");
    form.classList.toggle("white-mode");
    document.querySelector("form button").classList.toggle("white-mode");
    document.querySelectorAll("form input").forEach(element => {
        element.classList.toggle("white-mode");
    });
    document.querySelector("form a").classList.toggle("white-mode");
    document.querySelector("form h3").classList.toggle("white-mode");
});

document.getElementById("Re-enterPassword").addEventListener("blur",function () {
    if(pass !== this.value) {
        this.classList.add("invalid");
    } else {
        this.classList.remove("invalid");
    }
})

submit.addEventListener("click", function(event) {
    let valid = document.querySelectorAll("input").forEach(function(element) {
        if(element.classList.contains("invalid")) {
            return false;
        }
    })
    if(valid === false) {
        event.preventDefault();
    }
})




