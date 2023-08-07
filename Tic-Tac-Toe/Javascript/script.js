(() => {
    let startButton = document.querySelector(".game button");
    startButton.addEventListener("click", () => {
        document.querySelector(".game").style.cssText = "top: 20%;";
        startButton.style.cssText = "display: none;";
    })
})();