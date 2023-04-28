"use strict"


const input1 = document.getElementById("Input1field");
const answer = document.getElementById("Answerfield");
const btnconvert = document.getElementById("Convert");
const btnreset = document.getElementById("Reset");

window.onload = init;

function init(){
    btnconvert.onclick = onbtnconvertclicked;
    btnreset.onclick = onbtnresetclicked;
}

console.log ("all good")

function onbtnconvertclicked(){
    let input1Value = parseFloat(input1.value).toFixed(2);
    let CtoF = parseFloat((input1Value * 9/5 ) + 32);
    answer.value = CtoF;
}

function onbtnresetclicked(){
    let input1Value = input1.value;
    input1.value = "";
    answer.value = "";
}

console.log ("It works!")

