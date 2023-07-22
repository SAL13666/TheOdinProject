let menuButton = document.querySelector("button.menu");
let form = document.querySelector("form");
let after = document.querySelector("form h3");

menuButton.addEventListener("click",function() {
    form.style.cssText = "display:block;";
    menuButton.style.cssText = "display:none;";
});

after.addEventListener("click", function() {
    form.style.cssText = "display:none;";
    menuButton.style.cssText = "display:block;";
})