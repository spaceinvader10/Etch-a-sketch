let square;
let number = 15;

let gridContainer = document.getElementsByClassName('grid-container')[0];


let squareNumber = document.getElementById('numberOfSquaresInput');

squareNumber.addEventListener('keydown',numberUpdate)


function numberUpdate(event){
    //x.preventDefault();
    if (event.key === 'Enter'){
        console.log(squareNumber.value);
        number = squareNumber.value;


        for(let i = 0; i <= number-1 ; i++){
        let square = document.createElement('div')
        square.className ='grid-item '+ i; 
        gridContainer.appendChild(square);
    }



    
}
}



