'use strict';//deixa o código mais seguro e mais fácil de encontrar os bugs, pois proíbe de fazer algumas coisas que colaboram paa que algo dê errado. E mostra se você estiver usando palavbras reservadas.
/*
function logger (){
     console.log('My name is Paula');
}

logger();

//function declaration

/*function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;

}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
document.write(fruitProcessor(5,0));
console.log(fruitProcessor(5,0));

function calcAge1(birthyear){
    const age1 = 2037- birthyear
    return age1;
}

console.log(calcAge1(1981));
const age2 = calcAge2(1981);
chamar aqui ou depois da função

function calcAge2(birthyear){ //function declaration: a função pode ser chamada antes da declaração da mesma.
    return 2037-birthyear;
}                                                       console.log(calcAge2(1981)); chamar aqui ou antes da criação da função.
const age2 = calcAge2(1981);

// anonimous function- função sem nome



const calcAge2 = function (birthyear) {
    return 2037-birthyear; // function expression
    //só pode chamar depois da criação da expression.
}
const age2 = calcAge2(1981);
console.log(calcAge2(1981));

// utilizando function expression, o código fica mais organizado, pois primeiro se cria todas as funções do código, depois vai chamando erlas conforme precisar durante o código e armazena-se tudo em variáveis, fica mais bonito e de fácil manutenção e entendimento do código.

// Assunto : Arrow function- utilizando a function expression anterior como exemplo

const calcAge2 = function (birthyear) {
    return 2037-birthyear;
}
const age2 = calcAge2(1981);
console.log(calcAge2(1981));

// arrow function
const calcAge3 = birthyear=> 2037-birthyear;

const age3 = calcAge3(1981);
console.log(age3);

//Arrow serve somente quando há apenas um parâmetros e pouco código dentro da função.

const yearsUntilRetirement = (birthyear, firstName)=> {
    const age = 2037-birthyear;
    const retirement = 65 - age;

    return `${firstName} retires in  ${retirement} years.`
}

console.log(yearsUntilRetirement(1981, "Paula"));
console.log(yearsUntilRetirement(1985, "Renan"));
console.log(yearsUntilRetirement(2019, "Maze"));



//Functions calling other functions


function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces}  pieces of orange, using ${apples} apples and ${oranges} oranges.`;
    return juice;

}

console.log(fruitProcessor(2,3));

   const calcAge = function (birthyear) {
    return 2037 - birthyear;
   }

   const yearsUntilRetirement = function (birthyear, firstName){
    const age = calcAge(birthyear);
    const retirement = 65 - age;

    if (retirement > 0) {      
        console.log(`${firstName} retires in ${retirement} years`);  
        return retirement;
        
    } else {
        console.log(`${firstName} has already retired`); 
        return -1;       
    }
    
}
 console.log(yearsUntilRetirement(1981, 'Paula'));
 console.log(yearsUntilRetirement(1950, 'Lucia'));

Function declaration:

Function that can be used before it's declared.


Function expression:

Function value stored in a variable

Arrow Function: 

Great for a quick one-line functions.
Has no keyword, sem return ... ( more later...)


Function's functions : :D 
receive input data, transfrom input data and then output data.

*/

