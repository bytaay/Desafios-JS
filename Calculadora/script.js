//DESAFIO: Criar uma página com dois inputs e um botão para cada operação: soma, subtração, multiplicação e divisão.

var number1;
var number2;
var result;


function sum(){

    number1= parseFloat (document.getElementById("number1").value);
    number2= parseFloat (document.getElementById("number2").value);
    result= number1 + number2;
    console.log(result);

    document.getElementById("lblResult").innerHTML = 'Resultado: ' + result;

}

function subtrac(){

    number1= parseFloat (document.getElementById("number1").value);
    number2= parseFloat (document.getElementById("number2").value);
    result= number1 - number2;
    console.log(result);

    document.getElementById("lblResult").innerHTML = 'Resultado: ' + result;

}

function division(){

    number1= parseFloat (document.getElementById("number1").value);
    number2= parseFloat (document.getElementById("number2").value);
    result= number1 / number2;
    console.log(result);

    document.getElementById("lblResult").innerHTML = 'Resultado: ' + result;

}

function mutiply(){

    number1= parseFloat (document.getElementById("number1").value);
    number2= parseFloat (document.getElementById("number2").value);
    result= number1 * number2;
    console.log(result);

    document.getElementById("lblResult").innerHTML = 'Resultado: ' + result;

}
