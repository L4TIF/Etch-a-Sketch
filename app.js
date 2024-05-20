// const pixels = parseInt(prompt("Enter no. of pixels"));
const container = document.querySelector(".container");


//how many grids?
let createGrid = (gridCount = 16) => {
    for (let i = 0; i < gridCount * gridCount; i++) {
        const grid = document.createElement("div");
        grid.style.height = `${100 / gridCount}%`;
        grid.style.width = `${100 / gridCount}%`;
        container.appendChild(grid);
    }
}
createGrid();
