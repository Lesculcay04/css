//Emjemplo de clases expuesto//
interface Employee{
    employeeID: number;
    age: number;
}
interface Manager{
    stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager : ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true,
};

// Mediante las interfaces ciudadano y presidente crear un ojeto de tipo interseccion para describir al presidente//
// Tipo Interseccion//tengo que poner todos los argumentos obligatoriamente//
interface Pressidente{
    name: string;
    age: number;
    nacionality: string;
    agePresidencia: number;
    poderPolitico: boolean;
};
interface Ciudadano{
    work: string;
    civilStatus: string;
    childrens: number;

}
type PresidentCiudadano = Pressidente & Ciudadano;
let newPresidente : PresidentCiudadano = {
        name: 'Guillermo Lasso',
        age: 67,
        nacionality: 'Ecuatoriano',
        agePresidencia: 3,
        poderPolitico: true,
        work: 'Palacio Carondeleg',
        civilStatus: 'Casado',
        childrens: 5,
};
console.log (newPresidente.nacionality);


// tipo union //No necesariamente tengo que poner todos los argumentos//
let variable: Pressidente | Ciudadano;

variable = {
    name: "Guillermo Lasso",
    age: 67,
    nacionality: "Ecuatoriano",
    agePresidencia: 3,
    poderPolitico: true,
}; // OK
variable = {
    work: "Palacio Carondeleg",
    civilStatus: "Casado",
    childrens: 5,
}; // OK
//Ejemplo 2//
let variables: string | number;

variables = "Hola"; // OK
variables = 10; // OK


// tipo literal //
/*
type Color = "Rojo" | "Verde" | "Azul";

let color: Color;

color = "Rojo"; // OK
color = "Verde"; // OK
color = "Azul"; // OK
color = "Amarillo"; // Error
*/


