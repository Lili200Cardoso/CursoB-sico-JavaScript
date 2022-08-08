//fazendo uma função para calcular o fatorial de forma recursiva:
// 5! = 5x4x3x2x1 = 120
//5! = 5x4! = 120
//n! = nx(n-1)
//1! = 1
function fatorial(n){
    if (n == 1){//matemáticamente o fatorial de 1 será sempre 1!
        return 1
    } else {//Chamada da função fatorial dentro da própria função!RECURSIVIDADE!!!
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))