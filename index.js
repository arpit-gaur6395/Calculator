function btn7(){
   let ans = Number(document.getElementById("n7").value)
   let prev = document.getElementById("input").value
   document.getElementById("input").value = prev+ans;
}

function btn8(){
   let ans = Number(document.getElementById("n8").value)
   let prev = document.getElementById("input").value
   document.getElementById("input").value = prev+ans;
}
function btn9(){
   let ans =  Number(document.getElementById("n9").value)
   let prev = document.getElementById("input").value
   document.getElementById("input").value = prev+ans;
}
function btn4(){
   let ans =  Number(document.getElementById("n4").value)
   let prev = document.getElementById("input").value
   document.getElementById("input").value = prev+ans;
}
function btn5(){
   let ans =  Number(document.getElementById("n5").value)
   let prev = document.getElementById("input").value
   document.getElementById("input").value = prev+ans;
}
function btn6(){
   let ans =  Number(document.getElementById("n6").value)
   let prev = document.getElementById("input").value
   document.getElementById("input").value = prev+ans;
}
function btn1(){
   let ans = Number( document.getElementById("n1").value)
   let prev = document.getElementById("input").value
   document.getElementById("input").value = prev+ans;
}
function btn2(){
   let ans =  Number(document.getElementById("n2").value)
   let prev = document.getElementById("input").value
   document.getElementById("input").value = prev+ans;
}
function btn3(){
   let ans =  Number(document.getElementById("n3").value)
   let prev = document.getElementById("input").value
   document.getElementById("input").value = prev+ans;
}
function btn0(){
   let ans =  Number(document.getElementById("n0").value)
   let prev = document.getElementById("input").value
   document.getElementById("input").value = prev+ans;
}

function DOT(){
   let ans = document.getElementById("dot").value;
   let prev = document.getElementById("input").value;
   document.getElementById("input").value =prev+ans;
}


function AC(){
    document.getElementById("input").value = "";
}

function Add() {
let ans =  document.getElementById("add").value
let prev = document.getElementById("input").value
document.getElementById("input").value = prev+ans;
}

function Sub() {
let ans =  document.getElementById("sub").value
let prev = document.getElementById("input").value
document.getElementById("input").value = prev+ans;
}

function Div() {
let ans =  document.getElementById("div").value
let prev = document.getElementById("input").value
document.getElementById("input").value = prev+ans;
}

function Mul() {
let ans =  document.getElementById("mul").value
let prev = document.getElementById("input").value
document.getElementById("input").value = prev+ans;
}

function Modulo() {
let ans =  document.getElementById("mod").value
let prev = document.getElementById("input").value
document.getElementById("input").value = prev+ans;
}

function removeLast() {
    let input = document.getElementById("input");
    input.value = input.value.slice(0, -1); // Remove last character
}


function calculate() {
    let expression = document.getElementById("input").value;
        let result = eval(expression);
        document.getElementById("input").value = result;
    } 



function toggleSign() {
    let input = document.getElementById("input");
    let value = input.value;
    let parts = value.split(/([\+\-\*\/])/);
        for (let i = parts.length - 1; i >= 0; i--) {
        if (!['+', '-', '*', '/'].includes(parts[i]) && parts[i] !== '') {
            let num = parts[i];
            if (num.startsWith('-')) {
                parts[i] = num.substring(1);
            } else {
                parts[i] = '-' + num;
            }

            break;
        }
    }
    input.value = parts.join('');
}

function Modulo() {
    document.getElementById("input").value += "%";
}





