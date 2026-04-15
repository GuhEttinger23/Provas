// 1. Criação do Objeto Literal
const aluno = {
    nome: "Lucas Silva",
    notas: [7.5, 8.0, 9.5],

    // 2. Método para calcular a média
    calcularMedia: function() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return (soma / this.notas.length).toFixed(1);
    }
};

// 3. Desestruturação (Destructuring)
// Extrai a propriedade 'nome' diretamente para uma variável
const { nome } = aluno;

console.log(`Aluno: ${nome}`);
console.log(`Média Inicial: ${aluno.calcularMedia()}`);

// 4. Spread Operator (...)
// Adicionando uma nova nota sem modificar o array original diretamente via push,
// mas sim criando uma nova versão do array.
const novaNota = 10.0;
aluno.notas = [...aluno.notas, novaNota];

console.log(`Notas atualizadas: ${aluno.notas}`);
console.log(`Nova Média: ${aluno.calcularMedia()}`);