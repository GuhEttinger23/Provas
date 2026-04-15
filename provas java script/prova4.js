// Iniciamos com uma lista de compras vazia
let listaCompras = [];

// Função para exibir a lista formatada com índices
function exibirLista() {
    console.log("\n--- SUA LISTA DE COMPRAS ---");
    if (listaCompras.length === 0) {
        console.log("A lista está vazia.");
    } else {
        let i = 0;
        for (const item of listaCompras) {
            console.log(`${i}: ${item}`);
            i++;
        }
    }
    console.log("----------------------------\n");
}

// Loop principal do sistema
while (true) {
    let acao = prompt(
        "Escolha uma opção:\n1. Adicionar item\n2. Remover item (por índice)\n3. Atualizar item\n4. Exibir lista\n5. Sair"
    );

    if (acao === "5" || acao === null) break;

    switch (acao) {
        case "1":
            // ADICIONAR: push()
            let novoItem = prompt("Digite o nome do item para adicionar:");
            if (novoItem) {
                listaCompras.push(novoItem);
                console.log(`"${novoItem}" adicionado com sucesso!`);
            }
            break;

        case "2":
            // REMOVER: splice()
            exibirLista();
            let indiceRemover = Number(prompt("Digite o índice do item que deseja remover:"));
            if (indiceRemover >= 0 && indiceRemover < listaCompras.length) {
                let itemRemovido = listaCompras.splice(indiceRemover, 1);
                console.log(`Item "${itemRemovido}" removido.`);
            } else {
                console.log("Índice inválido.");
            }
            break;

        case "3":
            // ATUALIZAR: Acesso direto pelo índice
            exibirLista();
            let indiceAtualizar = Number(prompt("Digite o índice do item que deseja atualizar:"));
            if (indiceAtualizar >= 0 && indiceAtualizar < listaCompras.length) {
                let novoValor = prompt("Digite o novo nome do item:");
                listaCompras[indiceAtualizar] = novoValor;
                console.log("Item atualizado com sucesso!");
            } else {
                console.log("Índice inválido.");
            }
            break;

        case "4":
            exibirLista();
            break;

        default:
            console.log("Opção inválida.");
    }
}

console.log("Sistema encerrado.");