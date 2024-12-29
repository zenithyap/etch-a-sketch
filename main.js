const SIDES = 16;

const container = document.querySelector("#container");

for (let i = 0; i < SIDES; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    for (let j = 0; j < SIDES; j++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");

        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add("coloured");
        });

        gridRow.appendChild(gridSquare);
    }
    container?.appendChild(gridRow);
}
