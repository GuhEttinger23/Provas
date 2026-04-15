let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

// Criamos uma variável auxiliar para demonstrar os operadores de atribuição
let resultado;

console.log(`Números escolhidos: ${num1} e ${num2}`);
console.log("--- Resultados ---");

// 2. Operações Aritméticas e Operadores de Atribuição

// Adição
resultado = num1; 
resultado += num2; // Equivale a: resultado = resultado + num2
console.log(`Adição (+): ${resultado}`);

// Subtração
resultado = num1;
resultado -= num2; // Equivale a: resultado = resultado - num2
console.log(`Subtração (-): ${resultado}`);

// Multiplicação
resultado = num1;
resultado *= num2; // Equivale a: resultado = resultado * num2
console.log(`Multiplicação (*): ${resultado}`);

// Divisão
resultado = num1;
resultado /= num2; // Equivale a: resultado = resultado / num2
console.log(`Divisão (/): ${resultado}`);

// Resto da Divisão (Módulo)
resultado = num1;
resultado %= num2; // Equivale a: resultado = resultado % num2
console.log(`Resto da Divisão (%): ${resultado}`);