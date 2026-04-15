// 1. Estado Inicial
let listaNomes = ["Ana", "Bruno", "Caio", "Beatriz"];

console.log("Gerenciador de Nomes Iniciado.");

// 2. Loop de Interação
while (true) {
    const opcao = prompt(
        "Escolha uma operação:\n" +
        "1. Adicionar Nome\n" +
        "2. Filtrar por Letra\n" +
        "3. Buscar Nome Específico\n" +
        "4. Transformar em Maiúsculas\n" +
        "5. Verificar Tamanho dos Nomes\n" +
        "6. Sair"
    );

    if (opcao === "6" || opcao === null) break;

    switch (opcao) {
        case "1":
            // MÉTODO: push()
            const novoNome = prompt("Digite o nome para adicionar:");
            if (novoNome) {
                listaNomes.push(novoNome);
                console.log("Lista Atualizada:", listaNomes);
            }
            break;

        case "2":
            // MÉTODO: filter()
            const letra = prompt("Filtrar nomes que começam com a letra:").toUpperCase();
            const filtrados = listaNomes.filter(nome => nome.toUpperCase().startsWith(letra));
            console.log(`Nomes que começam com "${letra}":`, filtrados);
            break;

        case "3":
            // MÉTODO: find()
            const busca = prompt("Digite o nome exato que deseja buscar:");
            const encontrado = listaNomes.find(nome => nome.toLowerCase() === busca.toLowerCase());
            console.log(encontrado ? `Nome encontrado: ${encontrado}` : "Nome não localizado na lista.");
            break;

        case "4":
            // MÉTODO: map()
            const nomesMaiusculos = listaNomes.map(nome => nome.toUpperCase());
            console.log("Lista em Maiúsculas:", nomesMaiusculos);
            break;

        case "5":
            // MÉTODO: every()
            const todosLongos = listaNomes.every(nome => nome.length > 3);
            console.log(`Todos os nomes têm mais de 3 caracteres? ${todosLongos}`);
            if (!todosLongos) {
                console.log("Aviso: Existem nomes curtos na lista (3 caracteres ou menos).");
            }
            break;

        default:
            console.log("Opção inválida.");
    }
}

console.log("Sistema encerrado.");