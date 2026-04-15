// Seletores de Elementos
const input = document.getElementById('tarefaInput');
const btnAdicionar = document.getElementById('addBtn');
const listaUl = document.getElementById('listaTarefas');

// Função para adicionar tarefa
const adicionarTarefa = () => {
    const textoTarefa = input.value.trim();

    if (textoTarefa === "") {
        alert("Por favor, digite algo!");
        return;
    }

    // Criar o elemento <li> da tarefa
    const novoItem = document.createElement('li');
    
    // Criar um span para o texto (para facilitar o clique de concluir)
    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarefa;
    
    // Criar o botão de remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = "Remover";
    btnRemover.classList.add('remove-btn');

    // Montar o item
    novoItem.appendChild(spanTexto);
    novoItem.appendChild(btnRemover);
    listaUl.appendChild(novoItem);

    // Limpar o input
    input.value = "";

    // EVENTO: Marcar como concluída (Toggle na classList)
    spanTexto.addEventListener('click', () => {
        spanTexto.classList.toggle('concluida');
    });

    // EVENTO: Remover tarefa (usando removeChild)
    btnRemover.addEventListener('click', (evento) => {
        // Evita que o clique no botão dispare o clique no texto
        evento.stopPropagation(); 
        listaUl.removeChild(novoItem);
    });
};

// Evento de clique no botão "Adicionar"
btnAdicionar.addEventListener('click', adicionarTarefa);

// Atalho: Adicionar tarefa ao apertar "Enter"
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarTarefa();
});