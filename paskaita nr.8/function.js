"use strict"


function changeColorYellow() {
    document
        .getElementById('container')
        .style.backgroundColor = 'yellow';
}

function changeColorBlue() {
    document
        .getElementById('container')
        .style.backgroundColor = 'blue';
}

function onLoad() {
    changeColorRed();
}