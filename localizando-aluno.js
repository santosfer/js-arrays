const alunos = ['Julia', 'Theo', 'Rebecca', 'Ana']

const mediaAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediaAlunos]

//includes -> perguntando ao js se inclui. retorna booleano(v ou f)
//indexof -> retona o elemento que está no indice

const exibeNomeNota = (nomeDoAluno) => {
    
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)//definou var pra pegar o indice na array de aluno
        
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice] // pediu pra retornar o nome do aluno e o índice que combina com a nota
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota('Rebecca'))