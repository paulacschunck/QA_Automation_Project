'use strict';/* //cria erros visíveis e proíbe de executar certas coisas .
/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log ('I can drive ;D');

const interface = 'audio'; // o console vai mostrar que existe uma palavra reservada sendo usada no código erroneamente.*/

//AHHHHHHHHHHHHH FUNCTIOOOOOOOOOONNNNNNNNNSSSSSSSSS MISERICÓRDIAAAAAAAAAAAAAA
 /*
function logger () { // function name
console.log ('My name is Paula');//function body - ação
}
// calling/running/invoking function
logger (); //chamada
logger (); //chamada



function fruitProcessor(apples, oranges){  // fruitProcessor function name ***** apples and juices are the parâmeters that the processor needs to make a juice.
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const resultJuice = fruitProcessor (8,0);// 8 apples e 0 oranges  ARMAZENANDO EM VARIÁVEL O RESULTADO QUANDO SE QUER UTILIZAR PARA ALGUM PROCESSO
console.log (resultJuice);
console.log(fruitProcessor (8,0)); // SOMENTE REGISTRANDO O RESULTADO, QUANDO NÃO SE DESEJA UTILIZAR O RESULTADO, SOMENTE MOSTRÁ-LO.

const appleOrangeJuice = fruitProcessor (2,4);
console.log(appleOrangeJuice);
console.log(fruitProcessor(2,4));

//ACHO QUE AGORA ENTENDI ESSA PORRAAAAAAAAAAAAAAAAAAAAAAAAA
 
 function parImp (n) {
    if (n % 2 === 0) {
        return 'par'
    }else {
        return 'impar'
    }
 }

 const res = parImp (12);
 console.log(`This number is ${res}`);
 //ESTA FUNCÇÃO EU ENTENDI****
 
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}
 const age1 = calcAge1(1991);
 console.log(age1);

//function expression

const calcAge2 = function (birthYear){ // (anonimous function)
  6888  return 2022 - birthYear;
}
const age2 = calcAge2(1981);
console.log(age1,age2)

// arrow function
const calcAge3 = birthYear =>2022-birthYear; // one parameter and one line of code tructure
const age3 = calcAge3(1981);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName)=> { // more than one parameter and more than one line fo code structure
    const age = 2022-birthYear;
    const retirement = 65 - age;
   // return retirement; // needs to use RETURN and curl brackets
   return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1981,'Paula'));
console.log(yearsUntilRetirement(1975,'Bob'));
console.log(yearsUntilRetirement(1985,'Renan'));
console.log(yearsUntilRetirement(1989,'Ana'));
//


// Functions calling other functions

function cutFruitPieces(fruit) { // corta as frutas em 4 pedaços
    return fruit * 4;

}




function fruitProcessor(apples, oranges) {  // apples and juices are the parameters 
    const applePieces = cutFruitPieces(apples);// function inside another function
    const orangePieces = cutFruitPieces(oranges);// function inside another function

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037- birthYear;
}

const yearsUntilRetirement = function (birthYear,firstName) { // more than one parameter and more than one line fo code structure
    const age = calcAge (birthYear);
    const retirement = 65 - age;
   // return retirement; // needs to use RETURN and curl brackets
   //return `${firstName} retires in ${retirement} years.`;   
}
console.log (yearsUntilRetirement(1991,'Paula'));
console.log (yearsUntilRetirement(1970,'Mike'));


const calcAge = function (brithYeah) {
    return 2037 - brithYeah;
}

const yearsUntilRetirement = function (brithYeah, firstName) {
    const age = calcAge (brithYeah);
    const retirement = 65 - age;

    if (retirement >0){
        console.log(`${firstName} retires in ${retirement} years!`);//para serem executadas ações dentro de uma função, esta deve estar escrita antes do return, senão elas serão ignoradas.
        return retirement;
    } else {
        console.log(`${firstName} has already retired ;D`); // alt+up sobe uma linha o código!!
        return -1;
    }
   
}
console.log (yearsUntilRetirement(1991,'Paula'));
console.log (yearsUntilRetirement(1950,'Mike'));
*/


//ARRAYS


//constantes 
const friend1 ='Paula';
const friend2 ='José';
const friend3 ='Renan';
const friend4 ='Luiz';
const friend5 ='Silvano'; // não muito prático

console.log(friend1, friend2, friend3, friend4, friend5);

const friends = ['Paula', 'José', 'Renan', 'Luiz', 'Roberta'];//uma maneira de fazer um array - mais usada
console.log(friends);

const friendsNew = new Array('Paula', 'José', 'Renan', 'Luiz', 'Silvano');// outra maneira de se fazer um array function
console.log(friendsNew);

console.log(friends[0]);//descobrir elemento da posição desejada
console.log(friendsNew[3]);

console.log(friendsNew.length);//quantos elementos tem no array
console.log(friendsNew[friendsNew.length-1]);//pegar o penúltimo elemento do array
friendsNew[1]= 'Jay';
console.log(friendsNew);

const firstName = 'Jonas'
const jonas = ['firstName', 'Silva', 2037-1991,friendsNew];
console.log(jonas);
console.log(jonas.length);

// exercise

/*const calcAge = function (birthYear) {
    return 2037- birthYear;
}
const years = [1990, 1967,2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3= calcAge(years[years.length-1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length -1])];
console.log(ages);
*/

//add elements
const colors = ['amarelo', 'azul', 'Verde', 'preto'];
const newLenght = colors.push('violeta');
console.log(colors);
console.log(newLenght);

colors.unshift ('rosa');// add as first element
console.log(colors);


//remove methods
colors.pop();
const popped = colors.pop();
console.log(popped);
console.log(colors);

colors.shift ( );
console.log(colors);

console.log(colors.indexOf('azul'));//O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

console.log(colors.indexOf('purpura'));

console.log(colors.includes('aul- petróleo'));// vê se tem o item no array- false or true
console.log(colors.includes('amarelo'));





