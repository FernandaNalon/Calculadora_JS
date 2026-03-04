// Captura de todos os elementos
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const botaoSomar = document.getElementById("btnSomar");
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

// Evento que realiza a soma sendo chamado com click.
botaoSomar.addEventListener("click", somar);

// TODO: funções subtrair, multiplicar e dividir.





function limpar() {
    inputNum1.value = "";
    inputNum2.value = "";
    pResultado.textContent = "Resultado: ";
};

botaoLimpar.addEventListener("click", limpar);
