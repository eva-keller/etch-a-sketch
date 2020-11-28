const buttonClear = document.querySelector('.clearButton')
const buttonNew = document.querySelector('.newGame')
const gridContainer = document.querySelector('.gridContainer')

let color = 'black'

createGrid(20);

function createGrid(gridNumber){
    let gridSquare = gridNumber * gridNumber;
    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`
    for(i = 1; i <= gridSquare; i++ ){
        let grids = document.createElement('div')
        gridContainer.insertAdjacentElement('afterbegin', grids)
    }
    //get all divs, iterate through each
    let wholeGrid = gridContainer.querySelectorAll('div')
    wholeGrid.forEach(oneGrid => oneGrid.addEventListener('mouseover', colorGrid))
}


function colorGrid(){
      this.style.backgroundColor = 'green'
    }

function erase(){
    let wholeGrid = gridContainer.querySelectorAll('div')
    wholeGrid.forEach(oneGrid => oneGrid.style.backgroundColor = '#fff')
};

function makeNew(){
    erase()
    let gridNumber = parseInt(prompt('Gimme a grid size:'))
    while(isNaN(gridNumber) || gridNumber < 0 || gridNumber > 100){
        gridNumber = parseInt(prompt('Pick a number between 1 and 100'))
    }
    createGrid(gridNumber)
}

//eventlisteners
buttonClear.addEventListener('click', erase)
buttonNew.addEventListener('click', makeNew)
buttonColor.forEach(button => button.addEventListener('click', changeColorVar))