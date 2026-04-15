const form = document.getElementById('cadastroForm');
const msgSucesso = document.getElementById('mensagemSucesso');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Limpar mensagens de erro anteriores e sucesso
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = "");
    msgSucesso.innerText = "";

    try {
        // Coleta de dados
        const dados = {
            nome: document.getElementById('nome').value.trim(),
            usuario: document.getElementById('usuario').value.trim(),
            email: document.getElementById('email').value.trim(),
            senha: document.getElementById('senha').value,
            idade: Number(document.getElementById('idade').value)
        };

        // b) e c) Validação e Lançamento de Erros Personalizados
        if (dados.nome.length < 3) {
            throw { field: "nome", message: "O nome deve ter pelo menos 3 caracteres." };
        }
        
        if (dados.usuario === "") {
            throw { field: "usuario", message: "O campo usuário é obrigatório." };
        }

        if (!dados.email.includes("@")) {
            throw { field: "email", message: "Insira um e-mail válido." };
        }

        if (dados.senha.length < 6) {
            throw { field: "senha", message: "A senha deve ter no mínimo 6 dígitos." };
        }

        if (dados.idade < 18) {
            throw { field: "idade", message: "Você deve ter pelo menos 18 anos para se cadastrar." };
        }

        // e) Cadastro Bem-Sucedido
        msgSucesso.innerText = "✅ Cadastro realizado com sucesso!";
        form.reset();

    } catch (erro) {
        // d) Tratamento de Erros
        // Capturamos o objeto de erro lançado e exibimos no campo correto
        const elementoErro = document.getElementById(`error-${erro.field}`);
        if (elementoErro) {
            elementoErro.innerText = erro.message;
        } else {
            console.error("Erro inesperado:", erro);
        }
    }
});