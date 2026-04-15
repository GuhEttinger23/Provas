// 1. Declaração do Objeto Aluno
const aluno = {
    nome: "Mariana Oliveira",
    idade: 17,
    notas: [8.5, 6.0, 7.0],

    // Método para calcular a média
    calcularMedia: function() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
};

// 2. Desestruturação para acessar nome e idade
const { nome, idade } = aluno;

// 3. Spread Operator para adicionar uma nova nota (ex: um trabalho extra)
const notaExtra = 9.0;
aluno.notas = [...aluno.notas, notaExtra];

// 4. Função para verificar a situação
const verificarSituacao = (media) => {
    return media >= 7 ? "Aprovado(a) 🎉" : "Reprovado(a) ❌";
};

// --- EXIBIÇÃO DOS RESULTADOS ---

console.log(`--- Sistema Escolar ---`);
console.log(`Aluno: ${nome}`);
console.log(`Idade: ${idade} anos`);

// Loop para exibir todas as notas
console.log("Notas registradas:");
for (const nota of aluno.notas) {
    console.log(`- ${nota.toFixed(1)}`);
}

// Cálculo da média e situação final
const mediaFinal = aluno.calcularMedia();
console.log(`-----------------------`);
console.log(`Média Final: ${mediaFinal.toFixed(2)}`);
console.log(`Situação: ${verificarSituacao(mediaFinal)}`);