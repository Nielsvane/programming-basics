/* 
1. Maak een if-else statement die
checkt of iemand een onvoldoende/voldoende/goed/uitmuntend voor het vak programming basics heeft behaald.
(onvoldoende:  kleiner dan 6; voldoende: tussen 6 en 7; goed: tussen 7 en 9; uitmuntend: groter dan 9).
*/

const myGrade = 2;

if (myGrade < 6) {
    console.log('onvoldoende, helaas');

} else if (myGrade >= 6 && myGrade <= 7) {
    console.log('voldoende');

} else if (myGrade >= 7 && myGrade <= 9) {
    console.log('goed gedaan');

} else if (myGrade >= 9) {
    console.log('uitmuntend!');

} else {
    console.error('something went wrong');
}

// 2. Maak opdracht 1 nu met behulp van het switch statement.

switch (myGrade) {
    case 1:
        console.log('onvoldoende');
        break;
    case 2:
        console.log('onvoldoende');
        break;
    case 3:
        console.log('onvoldoende');
        break;
    case 4:
        console.log('onvoldoende');
        break;
    case 5:
        console.log('onvoldoende');
        break;
    case 6:
        console.log('voldoende');
        break;
    case 7:
        console.log('goed gedaan');
        break;
    case 8:
        console.log('goed gedaan');
        break;
    case 9:
        console.log('uitmuntend!');
        break;
    case 10:
        console.log('uitmuntend!');
    default:
        console.error('something went wrong')
        break;
}

/*
purchasedBook = true;
job = ‘teacher’;
inTrain = false;
*/

/*
3. Gegeven is de bovenstaande codesnippet.
Maak een if-else statement die de waarden van de variabelen checkt.
Als de 2 boolean variabelen ‘waar’ zijn en de job is ‘teacher’ dan moet in de console het volgende bericht worden getoond: ‘finally i can enjoy my book!’.
Voor alle andere mogelijkheden in de if-else structuur moet je ook een nette oplossing bedenken.
*/

