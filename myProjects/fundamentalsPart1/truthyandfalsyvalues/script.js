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

//Equality

const age ="18";
if (age === 18) console.log('You just became an adult =D (strict)') // === é um operador de comparação lógico igualdade estrita, onde os valores que estiverem em abos os lados serão comparados, se iguais , será true, se diferentes será false.
// '18' ==18 con true e '18' === 18 false

if (age == 18) console.log('You just became an adult =D (loose)')

const favourite = prompt("What's your favourite number?")

console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // '23' == 23 conversão de string para número.
    console.log('Cool!');
}