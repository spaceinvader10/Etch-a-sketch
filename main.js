let square;
let number = 15;

let gridContainer = document.getElementsByClassName('grid-container')[0];

let squareNumber = document.getElementById('numberOfSquaresInput');

squareNumber.addEventListener('keydown', numberUpdate);

function numberUpdate(event) {
    if (event.key === 'Enter') {
        console.log(squareNumber.value);
        number = squareNumber.value;

        // Remove existing squares
        while(gridContainer.firstChild){
            gridContainer.removeChild(gridContainer.firstChild);
        }
        //Checks if gridContainer has a firstChild, if it does, then while that is true start removing firstChild until none exist.
        //this is put here so it removes the previous divs before the new divs are entered in

        for (let i = 0; i < number; i++) {
            square = document.createElement('div');
            square.className = 'grid-item';
            gridContainer.appendChild(square);
        }
    }
}