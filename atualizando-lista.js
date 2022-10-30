const listaDeChamada = ['João','Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie']

//listaDeChamada.splice(2,2, 'Daisy')
            //indice, num elementos que vai remover, incluir
listaDeChamada.splice(3,0, 'Daisy')       
console.log(`Lista de Chamada: ${listaDeChamada}`)

//o splice altera a array original, diferente de outros caso onde foi preciso criar variáreis para savar os resultados que queriamos.