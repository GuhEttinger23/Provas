// Seletores
const formulario = document.getElementById('meuFormulario');
const listaUsuarios = document.getElementById('listaUsuarios');
const btnLimpar = document.getElementById('btnLimpar');

// b) Atribuir Evento de Submit
formulario.addEventListener('submit', function(event) {
    // c) Prevenindo Comportamento Padrão
    event.preventDefault();

    // Coleta de valores
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('nascimento').value;
    const email = document.getElementById('email').value;

    // d) Validação Simples (além do 'required' do HTML)
    if (!nome || !senha || !telefone || !nascimento || !email) {
        console.error("Erro: Todos os campos devem ser preenchidos.");
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // e) Adicionando Informações Dinamicamente
    const card = document.createElement('div');
    card.classList.add('card-usuario');

    // Usamos innerHTML para estruturar o conteúdo do novo elemento
    card.innerHTML = `
        <strong>Usuário:</strong> ${nome} <br>
        <strong>E-mail:</strong> ${email} <br>
        <strong>Telefone:</strong> ${telefone} <br>
        <strong>Nasc.:</strong> ${nascimento}
    `;

    // Adiciona o card à lista usando appendChild
    listaUsuarios.appendChild(card);

    console.log("Dados enviados com sucesso!");
    
    // Limpa o formulário após o envio bem-sucedido
    formulario.reset();
});

// f) Botão de Reset da Lista
btnLimpar.addEventListener('click', () => {
    // Limpa todos os elementos internos da lista
    listaUsuarios.innerHTML = "";
    console.log("A lista de usuários foi limpa.");
});