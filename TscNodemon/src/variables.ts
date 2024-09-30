export const pi:number = 3.14;

let nomb:string = "cadena";

let vec0: number[]=new Array();
vec0.push(2);
let vec1: any[]=[1,'dos',false,54];
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

let tupla1:[number,string]=[1,"primero"]; 

interface DiccioPersonaInterface {[index:string]:PersonaInterface};
let diccionario1:DiccioPersonaInterface={};
diccionario1['persona1']={nombre:'juan',edad:22};
diccionario1['persona2']={nombre:'maria',edad:43};
console.log('diccionario[persona1]: ',diccionario1['persona1'])