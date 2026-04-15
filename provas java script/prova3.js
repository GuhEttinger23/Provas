// 1. Coleta de Dados com while (true)
let listaDeNomes = [];

while (true) {
    let entrada = prompt("Digite um nome (ou digite 'sair' para encerrar):");

    // Verificamos se o usuário quer sair ou se cancelou o prompt
    if (entrada === null || entrada.toLowerCase() === "sair") {
        break; // Encerra o loop imediatamente
    }

    // Adicionamos o nome ao array apenas se não estiver vazio
    if (entrada.trim() !== "") {
        listaDeNomes.push(entrada);
    }
}

console.log("--- Processamento Concluído ---");

// 2. Processamento com for (Exibição com índices)
// Usamos o for clássico para ter acesso ao contador 'i'
console.log("Lista Numerada:");
for (let i = 0; i < listaDeNomes.length; i++) {
    // Somamos +1 ao índice pois arrays começam em 0, mas listas visuais em 1
    console.log(`${i + 1}: ${listaDeNomes[i]}`);
}

console.log("--- Mensagens Personalizadas ---");

// 3. Exibição com for...of
// Mais limpo que o for clássico quando não precisamos do índice
for (const nome de listaDeNomes) {
    console.log(`Bem-vindo(a), ${nome}!`);
}