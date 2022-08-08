//Lendo um vetor usando FOR():
let valores = [5,9,4,1,3]
valores.sort()

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('*************************************')

//Lendo um vetor usando FORECH()
let num = [1,7,8,5,3,2]
num.sort()

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
