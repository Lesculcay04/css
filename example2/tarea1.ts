let randomValue: unknown = 10;
randomValue = true;

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());
}else{
    console.log("Error - A string was expected here");
}

//Declarar e inicializar variables 

let s: any = 42;
    s = "Sol";
/* Aserciones de tipos y condicionales para determinar el tipo
if (typeof s === 'string') {
    console.log(s,'Es una cadena de texto');
}
*/

// Otro ejercicio array//
/*
type numer = number;
let list: number[] = [1, 2, 3];
let list: Array<numer> = [1, 2, 3];
*/
// Tuppla//

let personal: [string, number, boolean] = ['Marcia', 35, true]