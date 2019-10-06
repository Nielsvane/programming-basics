// 1.	Maak een functie die random een element uit de volgende array retourneert.

const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 

// 2.	Gegeven is de volgende 2-dimensionale array van al mijn platen:
const allMyRecords = [
   ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
   ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];
// Console.log alle waarden uit deze 2-dimensionale array. Tip: gebruik een dubbele loop.

// 3.	[Pittig]. Gegeven is de volgende for-loop op basis van de array uit vraag 1.
const filteredLapRoundsWithForLoop = function () {
   let newArray = [];
   for (let i = 0; i < lapRounds.length; i++) {

       if (lapRounds[i] < 4) {
           newArray.push(lapRounds[i]);
       }
   }
   return newArray;
}
// Gebruik de .filter functie uit javascript om precies hetzelfde resultaat te behalen als de for-loop. Geef aan waarom de .filter functie fijner/beter werkt.



    







