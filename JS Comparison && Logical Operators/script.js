const age = 25;
const isFemale = true;
const driverStatus = 'bob';
const name = "Robin";
const totalAmount = 15;

if (age >= 18) {
    console.log("You may enter the bar");
} else {
    console.log("Go home to your mommy");
}

if(isFemale == true) {
    console.log("You may enter the bar");
} else {
    console.log("Sorry dude, better luck next time!");
}

if(driverStatus == 'bob') {
    console.log('Save travels!');
} else {
console.log("Can you call someone to pick you up?");
}

if(age >= 18 && age <=25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Dat wordt dan 5,- euro...");
}

if(name === "Bram" || name === "Sarah") {
    console.log("Je krijgt een gratis biertje!");
} else {
    console.log("Dat wordt dan 5,- euro...");
}

if(totalAmount > 25 && totalAmount <= 50) {
    console.log("Je krijgt een gratis portie bitterballen!");
} else if(totalAmount > 50 && totalAmount <= 100) {
    console.log("Je krijgt een gratis portie nachos!");
} else if(totalAmount > 100) {
    console.log("Je krijgt een gratis fles champagne!");
} else {
    console.log("Geef meer geld uit om iets gratis te krijgen");
}

