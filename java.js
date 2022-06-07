let size = 100;
const maxWidth = 500;


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
   
    size = parseInt(prompt("Pick a size: 1-100", "38"), 10);
    /*document.documentElement.style.setProperty("--columns-row", size);*/
   
    createGrid(size);
    console.log(size);
})

createGrid(size)

const gridSquares = document.querySelectorAll('.gridSquare');
gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', event => {
        gridSquare.style.backgroundColor = "black"
      })
})





