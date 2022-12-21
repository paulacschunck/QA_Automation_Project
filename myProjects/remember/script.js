/*

//Function declaration

function fruitProcessor(apples,oranges) {
    console.log(apples, oranges);
    const juice =`juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0,8);
console.log(orangeJuice);
*/
/*function somar(a,b){
console.log(a,b);
const soma = a + b;
const resultado = `A soma de ${a} e ${b} é ${soma}.`;
return resultado;
}

const caclSoma= somar(10,2);
console.log(caclSoma); 

*/

//Function declaration - Pode ser chamada a função antes da inicialização dela.

function calcAge1(birthyear) {
    return 2037-birthyear;
}

const age1 = calcAge1(1991);

// Function Expression- Não pode ser chamada a função antes da inicialização dela.

/*const calcAge2= function calcAge1(birthyear) {
        return 2037-birthyear;
}  

const age2 = calcAge2(1991);

console.log(age1,age2);

//Arrow function

const calcAge2= function(birthYeah) {
    return 2037-birthYeah;
    
}*
//Arrow functions
// exemplo 1- mais simples one line functions

const calcAge3 = birthYeah => 2037- birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

//exemplo 2- mais complexas
const yearsUntillRetirement = (birthYeah,fisrtName) => {
    const age = 2037-birthYeah;
    const retirement = 65- age;
    // return retirement;
    return `${fisrtName} ${retirement}`;
}
console.log(yearsUntillRetirement(1991, "Jonas"));

// função que chama outra função

function cutFruitInPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples,oranges) {
    const applePieces = cutFruitInPieces(apples);
    const oragnePieces = cutFruitInPieces(oranges);
    
        
    const juice =`juice with ${applePieces} pieces of apples and ${oragnePieces} pieces and oranges.`;
    return juice;
}
console.log(fruitProcessor(1,3));*/

//review functions

const calcAge = function (birthYeah) {
    return 2037-birthYeah;
}
const yearsUntillRetirement = function (birthYeah,fisrtName) {
    const age = calcAge(birthYeah);
    
    const retirement = 65- age;
    // return retirement;
    return `${fisrtName} ${retirement}`;
}
console.log(yearsUntillRetirement(1991, "Jonas"));

