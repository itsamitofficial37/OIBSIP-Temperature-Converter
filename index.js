let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

let btn = document.querySelector('.button button');


function roundNumber(number){
    return Math.round(number*100)/100;
}

/* Celcius To Fahrenheit and Kelvin */


celciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celciusInput.value);
    let fTemp = (cTemp*(9/5))+32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
})

/* Fahrenheit To Celcius and kelvin */

fahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5/9);
    let kTemp = (fTemp - 32) * (5/9) + 273.15;

    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
})

/* Kelvin to Fahenheit and Celcius*/

kelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(kelvinInput.value);
    let fTemp = (kTemp - 273.15) * (9/5) + 32; 
    let cTemp = (kTemp - 273.15);

    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
})

/* when click on all clear button removes all data */

btn.addEventListener('click',()=>{
    celciusInput.value= "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
})