'use strict';

const userNumber = document.querySelector('#number');
const userAttempts = document.querySelector('.attempts');
const userResult = document.querySelector('.result');
const button = document.querySelector('.button');
let counter = 0;
console.log(button);

function getRandomNumber(min=0,max=100){
    console.log('chao');
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumber();
console.log(randomNumber);

function getUserNumber(){
    console.log (userNumber.value);
    return parseInt(userNumber.value);
    
}

function handlerButton(event){
    event.preventDefault();

    const userNumberInput = getUserNumber(); 

    if(userNumberInput > randomNumber){
        userResult.innerHTML = 'demasiado alto';
    }else if(userNumberInput < randomNumber){
        userResult.innerHTML = 'demasiado bajo';
    }else if(userNumberInput === randomNumber){
        userResult.innerHTML = 'Has ganado, campeona!';
    }

    counter += 1;
    userAttempts.innerHTML = counter;
}

button.addEventListener('click', handlerButton);

