class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

var animals = [
    new Animal("Mr Whiskers", "cat"),
    new Animal("Jerry", "mouse"),
    new Animal("Tom", "cat"),
    new Animal("Buster", "dog"),
    new Animal("Buddy", "dog"),
    new Animal("Mr Fluffles", "cat"),
    new Animal("Lucky", "dog"),
    new Animal("Bailey", "dog"),
    new Animal("Bella", "dog"),
]


//Filter
var cats = [];
for(var i = 0; i < animals.length; i++) {
    if(animals[i].type === 'cat')
        cats.push(animals[i]);
}

var catstwo = animals.filter((a) => a.type === 'cat');

console.log(cats);

//Map
var animalNames = [];
for(var i = 0; i< animals.length; i++) {
    animalNames.push(animals[i].name)
}

var animalNamesTwo = animals.map((a) => a.name);
//console.log(animalNames);