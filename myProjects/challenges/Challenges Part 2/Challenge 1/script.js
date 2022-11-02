'use strict'

const calcAverage = (a,b,c) => (a + b + c) /3 ;//função autônoma do resto do código
//console.log(calcAverage(3,4,5);//teste para ver se está funcionando a função :)


// // test 1
const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins,scoreKoalas);



const checkwinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}) ;D`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}) ;D`);
    } else {
        console.log('No team wins...');
    }
}

checkwinner(scoreDolphins,scoreKoalas);

checkwinner(150,550);

//test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkwinner(scoreDolphins, scoreKoalas);


//ahhhhhhhhhhhhhhhhhhhh, agora eu entendiiiiiiiiiiiiiiii porraaaaaaaaaaaaaaaa

/*função arrow : variável que vai receber o retorno automatico da função = parâmetros entre parênteses => arrow e a ação que se espera que a função faça e ;
exemplo:

const bill = (itemA, itemB, itemC) => (itemA + itemB+ itemC);
const billPaula = bill(100,50,20);
const billAna = bill(50,50,100);

console.log(billPaula, billAna);
Exemplo funcionando ok! ;D

*/
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   





