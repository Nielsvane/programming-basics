// 1. Maak een while loop die kijkt of een in een reeks getallen deelbaar zijn door 4.

for (let i = 1; i <= 20; i++) {
    if (i % 4 == 0) {
        console.log(`${i} is deelbaar door 4`)
    } else {
        console.log(`${i} is niet deelbaar door 4`)
    }
}

/* 
2.Een Fibonacci getallenreeks is bijvoorbeeld:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
Je ziet hier duidelijk dat elk getal de som is van de 2 voorafgaande getallen.
Schrijf een berekening van een Fibonacci reeks met while loop. Gebruik maximaal 10 getallen. Console.log ook de gehele getallenreeks.
Tip: denk het eerst eens uit op papier. Heb je moeite met deze vraag. Probeer dan eerst de udacity course te volgen.
*/

let amount = 10;
let num1 = 1;
let num2 = 1;
let j = 1;

while (j <= amount) {
    console.log(num1 + '')
    sumOfNumbers = num1 + num2;
    num1 = num2;
    num2 = sumOfNumbers;
    j++;
}

/* 3.	Gegeven is een array[2, 4, 8, 9, 12, 13] gebruik een for-loop om al deze getallen bij elkaar op te tellen. 
(check info over array https://javascript.info/array). Volgende week gaan we nog uitgebreid in op array’s.
*/

