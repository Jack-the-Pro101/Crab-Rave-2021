'use strict';

//Variable declaration

let currentTime = new Date();

let newYear2021 = new Date(2021, 0, 1, 12);

//Hide button and show timer
function iniCRStart() {
    let iniButton = document.getElementById('iniButton');
    let displayAfterIni = document.getElementById('afterIni');

    iniButton.style.display = 'none';
    displayAfterIni.style.display = 'block';

    document.getElementById('timer').innerHTML = currentTime;

    repeatTimer();
}

//Keep calling this function to change the time
function repeatTimer() {

    let currentTimeRepeating = new Date();
    document.getElementById('timer').innerHTML = currentTimeRepeating;

    setTimeout(function() {
        repeatTimer();
}, 500);
}