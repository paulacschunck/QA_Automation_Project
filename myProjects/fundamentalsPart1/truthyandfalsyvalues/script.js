/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));// empty object
console.log(Boolean(''));//empty string

const money = 1000;
if (money){
    console.log("Don't spend it all ;)");
} else {
    console.log('You shoukd get a job!');
}

const height = 0;
if (height){
    console.log('height is defined');
} else {
    console.log('Height is undefined');
}*/

/*Equality

const age ="18";
if (age === 18) console.log('You just became an adult =D (strict)') // === é um operador de comparação lógico igualdade estrita, onde os valores que estiverem em abos os lados serão comparados, se iguais , será true, se diferentes será false.
// '18' == 18 con true e '18' === 18 false

if (age == 18) console.log('You just became an adult =D (loose)')

const favourite = Number(prompt("What's your favourite number?"))

console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // '23' == 23 conversão de string para número. true e '22'== 23 false
    console.log('Cool! 23 is a amazing number!')
} else if (favourite === 7){
    console.log('7 is a cool number too!');
} else if (favourite === 9){
    console.log('9 is also a cool number too!');    
} else {
    console.log('Number is not 23 or 7 or 9. :( ');
}

if (favourite !== 23) console.log('Why not 23?');
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


/*if (hasDriversLicense&&hasGoodVision;) {
    console.log('Sarah is able to drive! :)');
} else {
    console.log('Someone else should drive...');
}*/

/*const isTired = false; // C
console.log (hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive! :)');
} else {
    console.log('Someone else should drive...');
}
*/
/*
const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Plan my course structure.');
        console.log('Go to coding meetup.');
        break;
    case'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples.');
        break; 
    case 'friday':
        console.log('Record videos.');
        break; 
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break; 
    default:
        console.log('Not a valid day!');
        break;  
}

if (day === 'monday') {
    console.log('Plan my course structure.');
    console.log('Go to coding meetup.');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos.');
} else if (day === 'wednesday'|| day === 'thursday') {
    console.log('Write code examples.');
} else if (day === 'friday') {
    console.log('Record videos.');
} else if ( day === 'saturday'|| day === 'sunday') {
    console.log('Enjoy the weekend');
} else console.log('Not a valid day!');

*/

//Ternary operator: for the situations we have to choose a simple choice.

//case
const age = 23;
age >= 18 ? console.log ('I like to drink wine') : 
console.log('I like to drink water');

const drink = age >= 18? 'wine': 'water';
console.log(drink);

//example of if else

let drink2; //declarar variável fora do bloco if else , caso queira usar ela dentro do bloco.
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log (drink2);
//Template literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'});



