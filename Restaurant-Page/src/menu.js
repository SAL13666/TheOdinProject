
export function renderMenu(name) {
    let dish = document.createElement("div");
    dish.classList.add("dish");
    dish.innerHTML = `
        <h1>pizza</h1>
        <img src="./img/Iconarchive-Fat-Sugar-Food-Pizza.512.png" alt="">
    `;
    return dish;
}