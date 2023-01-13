//Refazendo com mais detalhes
/*

let billValue= prompt('Qual o valor de sua conta? ');

const calcTip = function (bill) {
return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.20;
}

const gorjeta =(calcTip(billValue));
console.log(`Para o valor de ${billValue} de conta, a gorjeta é de : ${gorjeta}`); 

*/


document.getElementById("valor-calculado").style.display = "none";
document.getElementById("each").style.display = "none";

function calculateDinner(){
    var totalConta = document.getElementById("total-conta").value;
    var taxaServico = document.getElementById("taxa-servico").value;
    var numeroPessoas = document.getElementById("numero-pessoas").value;

    if(totalConta === "" || taxaServico == 0 || isNaN(totalConta) || isNaN(numeroPessoas)){
        alert("Por favor, coloque um valor válido!");
        return;
    }

    if (numeroPessoas === "" || numeroPessoas <= 1){
        numeroPessoas = 1;
        document.getElementById("each").style.display = "none"
    } else {
        document.getElementById("each").style.display = "block"
    }

    var totalTaxaServico = (totalConta * taxaServico) / numeroPessoas;
    var total = totalTaxaServico + (totalConta / numeroPessoas);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("valor-calculado").style.display = "block";
    document.getElementById("valor-por-cabeca").innerHTML = total;
}

document.getElementById("calcular").onclick = function(){
    calculateDinner();
}