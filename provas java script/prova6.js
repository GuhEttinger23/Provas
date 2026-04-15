// 1. Estado do Sistema
let tarefas = ["Estudar JavaScript", "Ir à academia"];

// 2. Função Anônima para Adicionar
// Atribuída a uma variável constante
const adicionarTarefa = function(nome) {
    if (nome) {
        tarefas.push(nome);
        console.log(`"${nome}" adicionada com sucesso!`);
    }
};

// 3. Arrow Function para Listar
// Sintaxe enxuta utilizando o método forEach
const listarTarefas = () => {
    console.log("\n--- LISTA DE TAREFAS ---");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index}: ${tarefa}`);
    });
    console.log("------------------------\n");
};

// 4. Função com Callback
// Esta função é o "motor". Ela recebe o índice e a lógica do que fazer (callback)
const processarTarefa = (indice, callback) => {
    if (indice >= 0 && indice < tarefas.length) {
        callback(indice);
    } else {
        console.log("Erro: Índice inválido.");
    }
};

// 5. Lógica de Interação (Loop Principal)
while (true) {
    const opcao = prompt(
        "Escolha uma operação:\n1. Adicionar\n2. Listar\n3. Remover\n4. Concluir\n5. Sair"
    );

    if (opcao === "5" || opcao === null) break;

    switch (opcao) {
        case "1":
            adicionarTarefa(prompt("Nome da tarefa:"));
            break;
            
        case "2":
            listarTarefas();
            break;

        case "3":
            listarTarefas();
            const idxRemover = Number(prompt("Índice para remover:"));
            // Passando uma Arrow Function como Callback para remover
            processarTarefa(idxRemover, (i) => {
                const removida = tarefas.splice(i, 1);
                console.log(`Removida: ${removida}`);
            });
            break;

        case "4":
            listarTarefas();
            const idxConcluir = Number(prompt("Índice para concluir:"));
            // Passando uma Arrow Function como Callback para atualizar o texto
            processarTarefa(idxConcluir, (i) => {
                tarefas[i] = `✅ ${tarefas[i]}`;
                console.log("Tarefa marcada como concluída!");
            });
            break;

        default:
            console.log("Opção inválida.");
    }
}