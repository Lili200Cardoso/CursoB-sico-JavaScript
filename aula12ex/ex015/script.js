function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano){
    alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','meninohomem.png')
            } else if (idade < 21){
            //jovem
            img.setAttribute('src','jovemHomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
       } else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'meninamulher.png')
                } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemMulher.png')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'mulheradulta.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'idosamulher.png')
                }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
       res.appendChild(img)
       
   }

}