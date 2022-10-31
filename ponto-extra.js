const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)

//forEach não retorna, só executa o que está dentro do bloco. O map retorna uma array atualizada.