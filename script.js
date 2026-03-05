// Captura de todos os elementos
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const botaoSomar = document.getElementById("btnSomar");
const botaoSubtrair = document.getElementById("btnSubtrair");
const botaoMultiplicar = document.getElementById("btnMultiplicar");
const botaoDividir = document.getElementById("btnDividir");
const botaoLimpar = document.getElementById("btnLimpar");
const pResultado = document.getElementById("resultado");

// Validações e tratamento de exceções
function somar() {
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;

    // || = OU
    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "Preencha os dois campos!";
        return;
    };

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "Digite apenas números válidos!";
        return;
    };

    const soma = numero1+numero2;
    pResultado.textContent = "Resultado: " + soma;
}

function subtrair() {
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;

    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "Preencha os dois campos!";
        return;
    };
    
    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "Digite apenas números válidos!";
        return;
    };

    const subtracao = numero1-numero2;
    pResultado.textContent = "Resultado: " + subtracao;
};

function multiplicar() {
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;

    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "Preencha os dois campos!";
        return;
    };
    
    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "Digite apenas números válidos!";
        return;
    };
    
    const multiplicacao = numero1*numero2;
    pResultado.textContent = "Resultado: " + multiplicacao;
};

function dividir() {
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;

    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "Preencha os dois campos!";
        return;
    };
    
    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "Digite apenas números válidos!";
        return;
    };
    
    if (numero2 === 0) {
        pResultado.textContent = "Digite um valor que não seja zero.";
        return;
    };

    const divisao = numero1/numero2;
    pResultado.textContent = "Resultado: " + divisao;
};

function limpar() {
    inputNum1.value = "";
    inputNum2.value = "";
    pResultado.textContent = "Resultado: ";
};

// Evento que realiza a operação sendo chamado com click.
botaoSomar.addEventListener("click", somar);
botaoSubtrair.addEventListener("click", subtrair);
botaoMultiplicar.addEventListener("click", multiplicar);
botaoDividir.addEventListener("click", dividir);
botaoLimpar.addEventListener("click", limpar);
