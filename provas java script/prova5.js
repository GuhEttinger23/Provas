// Iniciamos o array de tarefas vazio
let listaTarefas = [];

console.log("--- Gerenciador de Tarefas iniciado ---");

while (true) {
    let menu = prompt(
        "Gerenciador de Tarefas:\n" +
        "1. Adicionar tarefa\n" +
        "2. Listar tarefas\n" +
        "3. Remover tarefa\n" +
        "4. Concluir tarefa (✅)\n" +
        "5. Sair"
    );

    // Encerra o loop se o usuário escolher 5 ou cancelar o prompt
    if (menu === "5" || menu === null) {
        console.log("Encerrando o programa...");
        break;
    }

    switch (menu) {
        case "1":
            // ADICIONAR: push()
            let novaTarefa = prompt("O que você precisa fazer?");
            if (novaTarefa) {
                listaTarefas.push(novaTarefa);
                console.log(`Tarefa "${novaTarefa}" adicionada!`);
            }
            break;

        case "2":
            // LISTAR: for...of com contador
            console.log("\n--- MINHAS TAREFAS ---");
            if (listaTarefas.length === 0) {
                console.log("Nenhuma tarefa pendente.");
            } else {
                let i = 0;
                for (const t of listaTarefas) {
                    console.log(`${i} - ${t}`);
                    i++;
                }
            }
            console.log("----------------------\n");
            break;

        case "3":
            // REMOVER: splice()
            let idRemover = Number(prompt("Digite o índice da tarefa que deseja remover:"));
            if (idRemover >= 0 && idRemover < listaTarefas.length) {
                let removida = listaTarefas.splice(idRemover, 1);
                console.log(`Tarefa "${removida}" excluída.`);
            } else {
                console.log("Índice inválido.");
            }
            break;

        case "4":
            // CONCLUIR: Modificando o valor no array
            let idConcluir = Number(prompt("Digite o índice da tarefa concluída:"));
            if (idConcluir >= 0 && idConcluir < listaTarefas.length) {
                // Verificamos se já não está concluída para não repetir o emoji
                if (!listaTarefas[idConcluir].includes("✅")) {
                    listaTarefas[idConcluir] = "✅ " + listaTarefas[idConcluir];
                    console.log("Tarefa marcada como concluída!");
                } else {
                    console.log("Esta tarefa já está concluída.");
                }
            } else {
                console.log("Índice inválido.");
            }
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
}