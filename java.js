const size = 52;
const maxWidth = 400;


function createGrid(size) {
    for (i=0; i<size*size; i++) {
    
        let gridSquare = document.createElement("div");
        let container = document.getElementsByClassName("container")[0];
        gridSquare.classList.add("gridSquare");
        container.appendChild(gridSquare);
}
}




const gridSquares = document.querySelectorAll('.gridSquare');

gridSquares.forEach(gridSquare => {
let boxSize= (maxWidth / size) + "px";
console.log(boxSize);
  gridSquare.style.height = boxSize;
  gridSquare.style.width = boxSize;
})



document.documentElement.style.setProperty("--columns-row", size);


createGrid(size);