// Seletores
const input = document.getElementById('notaInput');
const btnAdd = document.getElementById('addBtn');
const listaContainer = document.getElementById('listaNotas');

// Chave para o Local Storage
const STORAGE_KEY = 'meu_bloco_notas';

// a) Carregar Notas ao iniciar
document.addEventListener('DOMContentLoaded', carregarNotas);

// b) Função para Adicionar Nota
btnAdd.addEventListener('click', () => {
    const titulo = input.value.trim();
    
    if (titulo === "") return alert("Digite um título!");

    // Recupera a lista atual ou cria uma nova se estiver vazia
    const notas = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // Verifica se já existe nota com esse título
    if (notas.some(n => n.titulo === titulo)) {
        return alert("Já existe uma nota com esse título.");
    }

    // Cria o objeto da nota
    const novaNota = { titulo };
    
    // Adiciona ao array e salva (Transformando em String)
    notas.push(novaNota);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notas));

    input.value = ""; // Limpa campo
    carregarNotas(); // Atualiza tela
});

// c) Função para Listar Notas
function carregarNotas() {
    listaContainer.innerHTML = "";
    
    // Recupera e transforma de volta em Objeto
    const notas = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    notas.forEach(nota => {
        const div = document.createElement('div');
        div.classList.add('nota-item');
        
        div.innerHTML = `
            <span>${nota.titulo}</span>
            <button class="btn-remove" onclick="removerNota('${nota.titulo}')">Remover</button>
        `;
        
        listaContainer.appendChild(div);
    });
}

// d) Função para Remover Nota
function removerNota(titulo) {
    let notas = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    
    // Filtra para manter apenas as notas que NÃO tem o título clicado
    notas = notas.filter(nota => nota.titulo !== titulo);
    
    // Salva a nova lista e atualiza a tela
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notas));
    carregarNotas();
}