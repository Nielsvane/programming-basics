/*function voorbeeld..

function doNotShoutMyName(myName, word) {
    let message = `saying ${word} ${myName}`;
    return message;
}

let messageOutsideTheFunction = doNotShoutMyName('Niels', 'Hi');
console.log(messageOutsideTheFunction);
*/

/* opdrachtje 1
function giveMeSomeNiceName(gender) {
    let myNewName = '';
    if (gender == 'female') {
        myNewName = 'Jenn'
    } else {
        myNewName = 'Arnold'
    }
    return myNewName;
}

console.log(giveMeSomeNiceName('female'));
*/

/*
function pigs(numberOfPigs) {
    let message = '';
    for (let i = 1; i <= numberOfPigs; i++) {
        message += '\u{1F437}'
    }
    console.log(message + 'knor!')
}
pigs(3);
'\u{1F437}'
*/

/*
function factorial(num) {
    let num1 = 1;
    for (let i = 0; i < num; i++) {
        num1 *= i + 1;
        
    }
    return num1;
}

console.log('5! =' + factorial(5));
*/

/* 
2.	Schrijf een functie countdown die van 10 - 1 aftelt
(dit wordt ook in de console getoond). Geef aan de functie een jaartal parameter mee die als hij bij ‘0’ is zegt ‘Happy {jaartal}’
*/

function countdown(seconds) {
    let jaartal = '2019';
    for (let i = 10; i >= 0; i--) {
        console.log(i);
        if (i == 0) {
            console.log(`Happy ${jaartal}`)
        } else {
            
        }
    }
    return 
}



