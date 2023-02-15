let number = 15;
let gridContainer = document.querySelector('.grid-container');
let squareNumber = document.getElementById('numberOfSquaresInput');
let rainbowButton = document.getElementById('rainbowBtn');
let paintButton = document.getElementById('colorImage');
let colorPicker = document.getElementById('c');
let color = '#000199';
let rainbowMode = false;

squareNumber.addEventListener('keydown', numberUpdate);

rainbowButton.addEventListener('click', function() {
    rainbowMode = !rainbowMode;
});

function numberUpdate(event) {
    if (event.key === 'Enter' && (squareNumber.value < 101)) {
      
        number = squareNumber.value;

        // Remove existing squares
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        for (let i = 0; i < number; i++) {
            let square = document.createElement('div');
            square.className = 'grid-item';
            gridContainer.appendChild(square);

            paintButton.addEventListener('click', function(){
                colorPicker.click();
                colorPicker.addEventListener('input', function(){
                    
                    color = colorPicker.value;
                    console.log(color);
                    // const hoverElements = document.querySelectorAll('.hover');
                    // hoverElements.forEach(function(hoverElement){
                    //     hoverElement.style.setProperty('background-color', color, 'important');
                    // });
                });

            });

            square.addEventListener('click', function() {
                if (rainbowMode) {
                    square.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
                
                } else {
                    square.style.backgroundColor = color;
                    // square.classList.toggle('hover');
                }
            });
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



