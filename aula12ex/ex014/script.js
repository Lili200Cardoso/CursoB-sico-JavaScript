function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha2.png'
        document.body.style.background = '#021306'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'tarde2.png'
        document.body.style.background = '#fad908'
    } else {
        //BOA NOITE!
        img.src = 'noite2.png'
        document.body.style.background = '#c018e1'
    }
}


