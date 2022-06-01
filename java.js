let firstStep = createGrid();

function createGrid(){
for (i=0; i<256; i++) {
    let bigBox = document.getElementsByClassName("container");
    let grid = document.createElement("div");
    grid.classList.add("gridSquare");
    grid.setAttribute("id", i + 1);;
    bigBox += bigBox[0].appendChild(grid);
};
}
