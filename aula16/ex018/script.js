let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []//Criando um vetor para analisar os dados da lista...


function isNumero(n){//Analisando se o valor é um número válido!
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){//Analisando se o número já existe na lista!
    if(l.indexOf(Number(n)) != -1){//usando o indexOf(), que me retorna -1, caso o numero já exista na lista!
        return true
    } else {
        return false
    }
}

function adicionar(){
    
    if(isNumero(num.value) && !inLista(num.value, valores)){//Analisando se o valor é um número e se ainda não existe na lista!
        valores.push(Number(num.value))//push(), add elementos a lista
        let item = document.createElement('option')//criando o elemento a ser add, dinamicamente
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)//add á lista!
        res.innerHTML = ''//Limpar o resultado
    } else {
        alert('Valor inválido ou Já encontrado na lista!Tente novamente!!') 
    }
    num.value = ''//para apagar no espaço de add, automaticamente.
    num.focus()//para o cursor voltar a piscar pra acrescentar um novo número...
}
function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let soma = 0
        let media = 0
        //Verificação do maior e menor número da lista
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores){
            soma += valores[pos]//fazendo a soma de todos os elementos da lista
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML +=  `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML +=  `<p>O maior número é ${maior}, e o menor número é ${menor}.</p>`
        res.innerHTML +=  `<p>A soma dos valores será:  ${soma}.</p>`
        res.innerHTML +=  `<p>A média dos valores será:  ${media}.</p>`

    }
}
