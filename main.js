
let number = 15;

let gridContainer = document.getElementsByClassName('grid-container')[0];

let squareNumber = document.getElementById('numberOfSquaresInput');

let rainbowButton = document.getElementById('rainbowBtn');

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
            let square = document.createElement('div');
            square.className = 'grid-item';
            gridContainer.appendChild(square);

            //if the rainbow was clicked before then replace hover with rainbow hover
            rainbowButton.addEventListener('click',function(){
                square.addEventListener('click', function() {
                    square.style.backgroundColor = 'rgb('+Math.floor(Math.random()*399)+','+Math.floor(Math.random()*399)+',' + Math.random()*199+')';
                })   
            })

            square.addEventListener('click', function(){
                square.classList.toggle('hover');
            })
        }
    }
}

// need to add mouse over squares will change the color to red, black, blue or whatever

//the below code does not work because it only updates once and is outside of the numberUPdate function. Needs to be in the function so it gets called everytime the square is made
// [...document.querySelectorAll('.grid-item')].forEach(function(item){
//     item.addEventListener('mouseover', function(){
//         item.classList.toggle('hover'); 
//     })
// })



