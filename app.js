const container = document.querySelector(".container");
const gridBtn = document.querySelector(".grid-btn");

//how many grids?
let createGrid = (gridCount = 16) => {
    console.log(gridCount)
    for (let i = 0; i < gridCount * gridCount; i++) {
        const grid = document.createElement("div");
        grid.style.height = `${100 / gridCount}%`;
        grid.style.width = `${100 / gridCount}%`;
        container.appendChild(grid);
    }
}
createGrid(); //create 16*16 grid first time

//clean grid
let cleanGrid = () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

gridBtn.addEventListener("click", () => {
    const pixels = parseInt(prompt("Enter no. of pixels"));
    cleanGrid();
    createGrid(pixels);
})
