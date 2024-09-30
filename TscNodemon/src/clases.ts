/*===============================================================================================================*/
/* CLASES - BASICO */
class Cancion{
    private artista:string;
    private titulo:string;
    constructor(artista:string = 'artista x default', titulo:string='titulo x default'){
        this.artista=artista;
        this.titulo=titulo;
    }
    play(){ // metodos no usan "function" y tambien pueden ser estáticos, publicos o privados
        console.log('...sonando..... ('+this.artista+' - '+this.titulo+')')
    }
}

class Reproductor{
    static readonly maxTemas:number = 30;
    constructor(private canciones:Cancion[]){}
    play(){
        const cancion = this.getRandom();
        cancion.play();
    }
    private getRandom(){
        const cant = canciones.length;
        const ind = Math.floor(Math.random()*cant)
        return this.canciones[ind]; //como canciones es 1 atributo public puede ponerse o no "this."
    }
}

const canciones=[new Cancion(), new Cancion('artss1','tit1'), new Cancion('art2','tit2'), new Cancion('arts3','tits3'), new Cancion('art4','tits4'),new Cancion()];

let repro1 = new Reproductor(canciones);
repro1.play()

/*
  ===============================================================================================================
  ===============================================================================================================
*/
/* INTERFACE */
interface Comer{
    comer(e:any):any;
}
class Animal implements Comer{
    energia:number=0;
    constructor(edad:number){}
    comer(e:number) {
        this.energia += e
    }
}
class Ave extends Animal{
    constructor(private tipo:string, private tamanio:string, private edad:number){
        super(edad)
    }
    presentarse():string{
        return 'soy un ave de tipo '+this.tipo+' con energia '+this.energia
    }
}
let ave1 = new Ave('De Corral','mediano/grande',1)
ave1.comer(4)
console.log(ave1.presentarse())

/*
  ===============================================================================================================
  ===============================================================================================================
*/
/**
 * CLASES CON ATRIBUTOS CON DATOS GENERICOS
 */
class Roedores <T>{
    public caracteris:T[];
    constructor(caracs:T[]){
        this.caracteris = caracs
    }
    getCarac(i:number):T{
        return this.caracteris[i]
    }
}
let cars1=[1,2,3,4];
let cars2=['uno','dos','tres'];
let cars3=[1,'dos',3,false];

var rat1 = new Roedores(cars1);
var rat2 = new Roedores(cars2);
var rat3 = new Roedores(cars3);

console.log('rat1.getCarac(3): ',rat1.getCarac(3))
console.log('rat2.getCarac(2): ',rat2.getCarac(2))
console.log('rat3.getCarac(3): ',rat3.getCarac(3))