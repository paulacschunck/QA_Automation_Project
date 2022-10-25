const bill = 500 ;

const tip = bill >= 50 && bill <= 300 ? (bill * 0.15 ): (bill * 0.20 ); // só não sabia como colocar esta conta simplificada, de resto, meu código está igual ao que o prof corrigiu.
console.log(`The value of the bill is ${(bill + tip)}`);