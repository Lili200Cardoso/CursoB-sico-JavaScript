var agora = new Date()//Pegando a hora atual do sitema que está rodando o script.
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa Noite!')
} 