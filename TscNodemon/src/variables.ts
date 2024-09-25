export const pi:number = 3.14;

let nomb:string = "cadena";

var cosas:any[] = new Array();
cosas.push("primero",2);

let persona1:{nombre:string,edad:number} ={nombre:"jose",edad:29}
interface PersonaInterface{
    nombre:string,
    edad:number
}
let persona2:PersonaInterface = {nombre:"juan",edad:22}
type PersonaTipo = {
    nombre:string;
    edad:number
}
let persona3:PersonaTipo = {nombre:"luis",edad:45}

type PaisesTipo = 'Arg'|'Bra'|'Col'|'Bol'|'Chi'|'Uru'|'Per'|'Par'|'Ven';
let pais1:PaisesTipo ='Arg';

type AceptadoTipo = boolean |'si'|'no';
let examen:AceptadoTipo = false;
