let firstStep = createGrid();
const reset = document.getElementById("btn");
const gridSquares = document.querySelectorAll (".gridSquare");


gridSquares.forEach (gridSquare => {
    gridSquare.addEventListener ("mousedown", function penDraw() {
        gridSquare.setAttribute("style", "background-color: gray")
    })
})


function createGrid(){
for (i=0; i<256; i++) {
    let bigBox = document.getElementsByClassName("container");
    let grid = document.createElement("div");
    grid.classList.add("gridSquare");
    grid.setAttribute("id", i + 1);;
    bigBox += bigBox[0].appendChild(grid);
};
}

reset.addEventListener ("click", function clearGrid() {
    location.reload();
});