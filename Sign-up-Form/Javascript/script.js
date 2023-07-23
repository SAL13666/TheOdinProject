let menuButton = document.querySelector("button.menu");
let form = document.querySelector("form");
let after = document.querySelector("form h3");
let modeButton = document.querySelector("button.mode");
let overlay = document.querySelector(".overlay");
let pass = document.getElementById("password").addEventListener("blur", function () {
    pass = this.value;
})


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

document.getElementById("password").addEventListener("blur",function () {
    if(this.value === "") {
        this.classList.add("invalid");
    }
})

document.getElementById("userName").addEventListener("blur",function () {
    if(this.value === "") {
        this.classList.add("invalid");
    }
})

document.getElementById("mail").addEventListener("blur",function () {
    if(this.value === "") {
        this.classList.add("invalid");
    }
})


document.forms[0].addEventListener("submit", function(event) {
    let isValid = true;

    document.querySelectorAll("form input").forEach(function(element){
        if(element.classList.contains("invalid")) {
            isValid = false;
        }
    })

    if(!isValid) {
        event.preventDefault();
    }
})




