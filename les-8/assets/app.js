// let object = {};
// const car = {
//    brand: 'Ford',
//    model: 'Mustang'
// };

const me = {
    name: 'Niels',
    age: '22',
    previousDiplmoma: 'HAVO',
    transportation: {
        type: 'car',
        brand: 'vw',
        wheels: 4
    },
    familyNames: ['pa', 'ma', 'broer', 'hond', 'kat'],
    favTransport: function() {
    console.log(`Mijn favoriete vervoersmiddel is ${me.transportation.type} en heeft ${me.transportation.wheels} wielen.`);
    },
    familyList: function() {
    me.familyNames.forEach(function(value, index, arr) {
    console.log(value); 
    });    
    }
};

me.familyList();
me.favTransport();


// 1.	Schrijf de volgende array om in JSON. De array beschrijft rondetijden van een hardloper. Wat zijn de namen (keys) van de properties?
// const lapRounds = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]; 

const lapRounds = {
    lapTime: [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]
};

const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: 'Linux',
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino',
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple',
    }
]

// Gebruik een for-loop of foreach-loop en print voor elk object de regel: “I have a [profession] named [name] and he likes to work on a [brand] computer”. 

teachers.forEach(function(value, index, arr) {
    console.log(value);
    
});


console.log(`I have a ${teachers.profession} named ${teachers.name} and he likes to work on a ${teachers.brand} computer.`);














