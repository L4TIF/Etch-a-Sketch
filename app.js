const container = document.querySelector(".container");
const gridBtn = document.querySelector(".grid-btn");
const resetBtn = document.querySelector(".reset");
const colorPicker = document.querySelector(".color");



//delete container grids for new one
let deleteGrid = () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

gridBtn.addEventListener("click", () => {
    const pixels = parseInt(prompt("Enter no. of pixels should not be more than 100"));
    if (!isNaN(pixels) && pixels <= 100) {
        deleteGrid(); //delete prev grid
        createGrid(pixels);
    }
})


// draw 
const draw = (grid) => {
    let target;
    grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = colorPicker.value;
        target = e.target;
    })
    // reset grid
    resetBtn.addEventListener("click", () => {
        target.style.backgroundColor = "white";
    })


}


//how many grids?
let createGrid = (gridCount = 16) => {
    console.log(gridCount)
    for (let i = 0; i < gridCount * gridCount; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.height = `${100 / gridCount}%`;
        grid.style.width = `${100 / gridCount}%`;
        container.appendChild(grid);
        draw(grid);
    }
}
createGrid(); //create 16*16 grid first time
