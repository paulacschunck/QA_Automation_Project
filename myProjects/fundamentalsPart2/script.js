'use strict';/* //cria erros visíveis e proíbe de executar certas coisas .
/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log ('I can drive ;D');

const interface = 'audio'; // o console vai mostrar que existe uma palavra reservada sendo usada no código erroneamente.*/

//AHHHHHHHHHHHHH FUNCTIOOOOOOOOOONNNNNNNNNSSSSSSSSS MISERICÓRDIAAAAAAAAAAAAAA
 
/*function logger () { // function name
console.log ('My name is Paula');//function body - ação
}
// calling/running/invoking function
logger (); //chamada
logger (); //chamada*/


/*
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
 /*
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
*/

// Functions calling other functions
/*
function cutFruitPieces(fruit) { // corta as frutas em 4 pedaços
    return fruit * 4;

}




function fruitProcessor(apples, oranges) {  // apples and juices are the parameters 
    const applePieces = cutFruitPieces(apples);// function inside another function
    const orangePieces = cutFruitPieces(oranges);// function inside another function

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));*/
/*
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
*/
/*
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
