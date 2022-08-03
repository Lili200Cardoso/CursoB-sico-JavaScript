function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0 ){
        alert('Por favor, digite um número!') 
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''//Para limpar o campo select antes de chamar uma nova tabuada!
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        
    }  
}