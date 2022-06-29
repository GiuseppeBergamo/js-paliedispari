
const userChoice = prompt("Scegli pari o dispari");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));


function getRandomNumber(min = 1, max = 5) {
    randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNumber;
}


const computerNumber = getRandomNumber()
console.log(getRandomNumber);


const resultNumber = getRandomNumber() + userNumber;
console.log(resultNumber)


function isEven(resultNumber) {
    let result = false;

    if (resultNumber % 2 === 0) {
        result = true;
    }
    return result;
}

const verifica = isEven(resultNumber);

if (userChoice === "pari" && verifica === true) {
    console.log("Hai vinto!");
} else if (userChoice === "dispari" && verifica === false) {
    console.log("hai vinto!");
} else console.log("hai perso");