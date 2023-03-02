'use strict';
// --------
// FUNZIONI
// --------

function myCreateElement(htmlElement,className,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.classList.add('cell-'+htmlValue);
    element.innerText = htmlValue;

    element.addEventListener('click', function(){
        alert(htmlValue);
    })

    return element;
}

function myAppendElement(containerElement, htmlElement){
    containerElement.append(htmlElement);
}

// ----
// MAIN
// ----
let cellNumber = 100;
const containerBoard = document.querySelector('.board');
const startGame = document.querySelector('.startMenu')
for(let i = 1; i<= cellNumber; i++){
    const createdElement = myCreateElement('div','cell', i);
    myAppendElement(containerBoard, createdElement);
}

