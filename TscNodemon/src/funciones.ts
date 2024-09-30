function promedio(n1:number,n2:number):number{
    return (n1+n2)/2
}
/**
 * Funciones generica
 */
function reversa <T> (lista:T[]):T[] { // se indica el tipo generico con: <T>
    let listaRta : T[] = [];
    for(let i=lista.length;i>0;i--){
        listaRta.push(lista[i-1])
    }
    return listaRta;
}

const vec0: string[]=['uno','dos','tres'];
const vec1: number[]=[1,2,3];

console.log('reversa(vec0): ',reversa(vec0));
console.log('reversa(vec1): ',reversa(vec1));