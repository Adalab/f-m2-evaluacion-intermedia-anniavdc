'use strict';

console.log('>> Ready :)');

/*El juego consiste en que el juego genera un número al azar entre 1 y 100, y el jugador tiene que
adivinarlo. El juego le da pistas de si el número que prueba es demasiado alto o bajo, y va
contabilizando el número de intentos. Hasta que al final el jugador acierta el número.*/

//Crear HTML
    //titulo
    //label
    //input
    //button
    //p rojo con intentos realizados
    //p azul con pistas

//Recoger los elementos de HTML en JS
    //input
    //button
    //p rojo
    //p azul

const userNumber = document.querySelector('#number');
const userAttempts = document.querySelector('.attempts');
const userResult = document.querySelector('.result');
const button = document.querySelector('.button');

console.log(button);


//Añadir un listener al button
//console.log
//button.addEventListener('click', handlerButton);

//Funcion generadora de números al azar entre 0-100

function getRandomNumber(min=0,max=100){
    console.log('chao');
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber());

//event.preventDefault para el button
//console.log

//Función para que al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola

function getUserNumber(event){
    event.preventDefault();
    console.log (userNumber.value);
}

//button.addEventListener('click', getUserNumber);

//Función comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS
//GANADO, CAMPEONA!")


function compareNumbers(event){
    const input = parseInt(getUserNumber);
    event.preventDefault();
    console.log('hola');
    if(input > getRandomNumber){
        userResult.innerHTML = 'demasiado alto';
    }else if(input < getRandomNumber){
        userResult.innerHTML = 'demasiado bajo';
    }else if(input === getRandomNumber){
        userResult.innerHTML = 'Has ganado, campeona!';
    }
}

button.addEventListener('click', compareNumbers);


//console.log

//actualizar el contador de intentos cada vez que el usuario pruebe
//console.log

//Poner estilos en CSS