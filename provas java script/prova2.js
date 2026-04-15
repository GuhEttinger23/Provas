// 1. Entrada de Dados
const idade = Number(prompt("Digite sua idade:"));
const statusUsuario = prompt("Digite seu status (registrado / não registrado):").toLowerCase();

// 2. Operador Ternário
// Sintaxe: (condição) ? "caso verdadeiro" : "caso falso"
const classificacaoEtaria = idade >= 18 ? "maior de idade" : "menor de idade";

console.log(`Classificação: Usuário é ${classificacaoEtaria}.`);

// 3. Estrutura Switch
// Verifica o valor exato da variável statusUsuario
switch (statusUsuario) {
    case "registrado":
        console.log("Mensagem: Bem-vindo de volta ao sistema!");
        break;
    case "não registrado":
        console.log("Mensagem: Por favor, complete seu registro para continuar.");
        break;
    default:
        console.log("Mensagem: Status desconhecido.");
}

// 4. Operadores Lógicos (&& e ||)
const estaRegistrado = statusUsuario === "registrado";

// Verificação de Acesso Completo (E lógico: as duas condições devem ser verdadeiras)
if (idade >= 18 && estaRegistrado) {
    console.log("Controle de Acesso: Acesso completo liberado.");
} 

// Verificação de Acesso Limitado (OU lógico: se uma das condições for verdadeira, entra no bloco)
if (idade < 18 || !estaRegistrado) {
    console.log("Controle de Acesso: Acesso limitado.");
}