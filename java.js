
const maxWidth = 500;
let isEraserOn = false;



function createGrid(size) {
    
    
    for (i=0; i<size*size; i++) {
        let gridSquare = document.createElement("div");
        let container = document.getElementsByClassName("container")[0];
        gridSquare.classList.add("gridSquare");
        container.appendChild(gridSquare);
        document.documentElement.style.setProperty("--columns-row", size);
}
}




let button = document.getElementById("reset");
button.addEventListener("click", reset => {
    location.reload();
})



let resize = document.getElementById("resize");
resize.addEventListener("click", function() {
    
    const cleanSquares = document.querySelectorAll('.gridSquare');

    cleanSquares.forEach(cleanSquare => {
    cleanSquare.style.backgroundColor = 'cornflowerblue'});

    size = parseInt(prompt("Pick a size: 1-100", "38"), 10);
    /*document.documentElement.style.setProperty("--columns-row", size);*/
    
    createGrid(size);
})

createGrid(100);

const gridSquares = document.querySelectorAll('.gridSquare');
gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', event => {
       if (isEraserOn === false) {gridSquare.style.backgroundColor = "black"}
       else {gridSquare.style.backgroundColor = "cornflowerblue"}
      })
})



function becomeEraser() {
    if (document.getElementById ("eraser").checked){
        return isEraserOn = true}
        else {return isEraserOn = false;}}


