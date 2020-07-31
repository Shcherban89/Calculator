const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev){
    let numbers = display.value;
    if(numbers[0] === "0" && numbers[1]!== "."){
    display.value = numbers.substring(0, numbers.length - 1) + ev.target.innerText;
    } else {
    display.value += ev.target.innerText;
    }
}

document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    let numbers = display.value;
    if (numbers.endsWith("+") || numbers.endsWith("-") || numbers.endsWith("*") || numbers.endsWith("/") || numbers.endsWith(".")){
       display.value = numbers.substring(0, numbers.length - 1) + ev.target.innerText;
    } else {
    display.value += ev.target.innerText;
    } 
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    let numbers = display.value;
    if (numbers.includes("/0")&&(!numbers.includes("/0."))){
       display.value = "error" ;
    } else {
    display.value = Math.round(eval(display.value) * 1000000000000)/ 1000000000000;
    }
}

document.querySelector('.clear').addEventListener('click', clear);

function clear(){
    display.value = "";
}

document.querySelector('.back').addEventListener('click', back);

function back(){
    let numbers = display.value;
    display.value = numbers.substring(0, numbers.length - 1);
}