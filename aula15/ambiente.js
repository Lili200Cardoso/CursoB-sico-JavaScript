//ARRAYS

let num = [5, 8, 2, 9, 3]
num[3] = 6//Acrescentando itens ao array na posição que sejar...
num.push(7)//Acrescentando itens no array sem se preocupar com a posição que irá receber o novo valor...
console.log(`Nosso vetor é o ${num}`)

//Usando o atributo length para retornar o tamanho do nosso array
console.log(`O vetor tem ${num.length} posições.`)

//O método sort(), coloca todos os itens do array em ordem crescente
console.log(`O vetor em ordem crescente será: ${num.sort()}.`)

//Lendo um vetor com FOR()
for(let pos= 0; pos < num.length; pos++){
    console.log(num[pos])
}
//Buscar um valor dentro do vetor:
let cade = num.indexOf(9)//Busca por valor e retorna a chave do valor(indice);
if (cade == -1){//Se o valor não existir, retornará -1;
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${cade}`)
}




