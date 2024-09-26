import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let  dagen = await userInput.question('geef het aantal dagen? ');
console.log(dagen);

let uren = await userInput.question('geef het aantal uren? ');
console.log(uren);

let minuten = await userInput.question('geef het aantal minuten? ');
console.log(minuten);

let seconden = await userInput.question('geef het aantal seconden? ');
console.log(seconden);

let aantalseconden = (dagen * 24 * 60 * 60) + (uren * 60 * 60) + (minuten * 60) + (seconden);
console.log(aantalseconden);

process.exit();