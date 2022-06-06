const size = 38;
const maxWidth = 400;


function createGrid(size) {
    for (i=0; i<size*size; i++) {
    
        let gridSquare = document.createElement("div");
        let container = document.getElementsByClassName("container")[0];
        gridSquare.classList.add("gridSquare");
        container.appendChild(gridSquare);
}
}
createGrid(size);



const gridSquares = document.querySelectorAll('.gridSquare');


gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', event => {
        gridSquare.style.backgroundColor = "black"
      })
})



document.documentElement.style.setProperty("--columns-row", size);


