const CONTAINER_LENGTH = 700;

const container = document.querySelector("#container");

function newGrid(sides) {
    const grid = document.createElement("div");
    grid.id = "new-grid";

    for (let i = 0; i < sides; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < sides; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.style.width = `${CONTAINER_LENGTH / sides}px`;
            gridSquare.style.height = `${CONTAINER_LENGTH / sides}px`;
            gridSquare.classList.add("grid-square");
    
            gridSquare.addEventListener('mouseover', () => {
                gridSquare.classList.add("coloured");
            });
    
            gridRow.appendChild(gridSquare);
        }
        grid.appendChild(gridRow);
    }

    container?.appendChild(grid);
};

function removeGrid(gridId) {
    const gridToRemove = document.querySelector(gridId);
    container?.removeChild(gridToRemove);
}

function promptGridSize() {
    const sides = +prompt("Number of sides for the grid (max 100)", "16");
    return sides;
}

newGrid(16);

const customGridButton = document.querySelector("#grid-button");

customGridButton?.addEventListener("click", () => {
    let sides = promptGridSize();
    while (sides > 100) {
        sides = promptGridSize();
        sides = sides ? sides : 16;
    }
    removeGrid("#new-grid");
    newGrid(sides);
});
