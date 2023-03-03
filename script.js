
let numberOne = 0;
let numberTwo = 1;
let numberThree = 0;
let userNumber;


function init(){}

function numberRescue(){
   userNumber = Number(document.getElementById('inputNumber').value)
   validateNumber();
}

function validateNumber(){
    const numberBelongs = 'O numero'+' '+ userNumber +' '+'pertence a sequência de Fibonacci'
    const numberNotBelongs = 'O numero'+' '+ userNumber +' '+'não pertence a sequência de Fibonacci'

    while ( userNumber > numberThree){
        numberThree = numberOne + numberTwo;

        numberOne = numberTwo;
        numberTwo = numberThree;
    }

    if ( userNumber == 0){
        document.getElementById('result').innerHTML = numberBelongs.fontcolor('green')
        document.getElementById('inputNumber').value = ''
    } else if ( userNumber == numberThree){
        document.getElementById('result').innerHTML = numberBelongs.fontcolor('green')
        document.getElementById('inputNumber').value = ''
    }else{
        document.getElementById('result').innerHTML = numberNotBelongs.fontcolor('red')
        document.getElementById('inputNumber').value = ''
    }
}

function resetcalculate(){
    window.location.reload();
}



