//Criando um objeto em JS
let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    if(p > 0)
        console.log('Engordou!')
    this.peso += p
}}

amigo.engordar()
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)