'use strict';
// --------
// FUNZIONI
// --------

// FUNZIONE CHE PERMETTE DI CREARE UN ELEMENTO HTML
// PERMETTE DI AGGIUNGERE 2 CLASSI A PIACERE E 1 INCREMENTALE 
function myCreateElement(htmlElement,className1,className2,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className1);
    element.classList.add(className2);
    element.classList.add('cell-'+htmlValue);
    element.innerText = htmlValue;

    element.addEventListener('click', function(){
        console.log(htmlValue);
        element.classList.add('modeSelected')
    })

    return element;
}

// FUNZIONE CHE APPENDE QUALCOSA AD UN ELEMENTO HTML 
function myAppendElement(containerElement, htmlElement){
    containerElement.append(htmlElement);
}

// FUNZIONE CHE, COMBINATA ALLE 2 DI SOPRA PERMETTE DI INSERIRE PIU' ELEMENTI
// IN UN CONTAINER 
function createTable(numeroCelle,doveInserirle,classeCelle){
    doveInserirle.innerHTML=('');
    for(let i = 1; i<= numeroCelle; i++){
        const createdElement = myCreateElement('div','cell',classeCelle,i);
        myAppendElement(doveInserirle, createdElement);
    }
}

// FUNZIONE CHE AGGIUNGE UNA CLASSE 
function myAddClass (elemento,nomeClasse){
    elemento.classList.add(nomeClasse);
}

// FUNZIONE CHE RIMUOVE 1 CLASSE
function myRemoveClass (elemento1,nomeClasse1){
    elemento1.classList.remove(nomeClasse1);
}


// ----
// MAIN
// ----

let cellNumber;
const containerBoard = document.querySelector('.board');
const startGame = document.querySelector('.startMenu');

const containerBoardMain = document.getElementById('containerBoard');
const initailMenu = document.getElementById('initialMenu');

const classHidden = 'hidden';
const classInitialMenu = 'initial';


const headerButtonEasy = document.getElementById('easyButton');
const headerButtonNormal = document.getElementById('normalButton');
const headerButtonHard = document.getElementById('hardButton');


headerButtonEasy.addEventListener('click',function(){
    myRemoveClass (containerBoardMain,classHidden)
    myRemoveClass (menuHeader,classInitialMenu)
    cellNumber = 100;
    createTable(cellNumber,containerBoard,'easy');
})

headerButtonNormal.addEventListener('click',function(){
    myRemoveClass (containerBoardMain,classHidden)
    myRemoveClass (menuHeader,classInitialMenu)
    cellNumber = 81;
    createTable(cellNumber,containerBoard,'normal');
})

headerButtonHard.addEventListener('click',function(){
    myRemoveClass (containerBoardMain,classHidden)
    myRemoveClass (menuHeader,classInitialMenu)
    cellNumber = 49;
    createTable(cellNumber,containerBoard,'hard');
})




