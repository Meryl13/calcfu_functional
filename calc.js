let display=document.getElementById('display');

function append(value){
    display.value +=  value;
}

function calculate(){
    display.value = eval(display.value);
}

function cleared(){
    display.value="";
}

function backspace(){
    display.value = display.value.slice(0, -1)
}

function negateNumber(){
    display.value = -parseFloat(display.value);
}

function percentage(){
    display.value = parseFloat(display.value) / 100;
}
