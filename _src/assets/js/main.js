'use strict';

const userNumber = document.querySelector('#number');
const userAttempts = document.querySelector('.attempts');
const userResult = document.querySelector('.result');
const button = document.querySelector('.button');
let counter = 0;

function getRandomNumber(min=0,max=100){
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumber();

const getUserNumber = () => parseInt(userNumber.value);   


function handlerButton(event){
    event.preventDefault();

    userFeedback();

    timeCounter();
}

const feedbackText = (string) => userResult.innerHTML = string;

const userFeedback = () =>{
    const userNumberInput = getUserNumber(); 

    if(userNumberInput > randomNumber){
        feedbackText('demasiado alto');
    }else if(userNumberInput < randomNumber){
        feedbackText('demasiado bajo');
    }else if(userNumberInput === randomNumber){
        feedbackText('Has ganado, campeona!');
    }
}

const timeCounter = () =>{
    counter += 1;
    userAttempts.innerHTML = counter;
}

button.addEventListener('click', handlerButton);

