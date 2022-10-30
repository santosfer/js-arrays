const notas = [10, 6.5,8,7.5]

let somaDasNotas = 0 // o for acessa essa variável e faz o loping, se tivesse dentro do for ele excluiria e começaria a contagem novamente.

for (let i = 0; i< notas.length; i++) {
    somaDasNotas += notas[i] 
}

let media = somaDasNotas/notas.length

console.log(media)