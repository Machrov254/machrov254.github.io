"use strict"


let arrayOfColors = [
    'red', // index 0
    'yellow', // index 1
    'green', // index 2
    'purple',
    'black',
]

let changeHeight = [
    '100px',
    '200px',
]

let index = 0;

/**
 * Add width and height to function changeColor
 */


function changeColor() {
    let randomColor = Math.random() * 100;
    let element = document
        .getElementById('container');
    element.style.backgroundColor = arrayOfColors[index];
    element.style.color = randomColor + '%';
    console.log(arrayOfColors[index], index);
}

function changeHeight() {
    let randomHeight = Math.random() * 100;
    let element = document
        .getElementById('container');
    element.style.height = changeHeight[index];
    element.style.height = randomHeight + '%';
    console.log(changeHeight[index], index);
    // index += 1;
}

function onLoad() {
    document.getElementById('buttonChangeColorRed').onclick = changeColor;
    document.getElementById('buttonChangeColorBlue').onclick = changeHeight;
}


window.onload = onLoad;