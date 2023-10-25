/* Crear un objeto de tipo interseccion para describir a la capital de tu provincia//
interface Ciudad{
    name: string;
    age: number;
    population: number;
    crimeLevel= "baja" | "alta" | "media";
};
interface Capital{
    names: string;
    ages: number;
    popularity: number;
    comercio: boolean;

}
type MyCity = Ciudad & Capital;
let newCiudad : MyCity = {
    name: 'Cuenca',
    age: 126,
    population: 123445,
    names: 'Quito',
    ages: 340,
    popularity: 3455678,
    comercio: true,
    crimelevel: 'alta',
};
console.log (newCiudad); */

interface Ciudad {
    nombre: string;
    poblacion: number;
    nivelDeDelincuencia: "alta" | "media" | "baja";
}

interface Capital {
    esCapital: boolean;
}

type Cuenca = Ciudad & Capital;

const cuenca: Cuenca = {
    nombre: "Cuenca",
    poblacion: 600000,
    nivelDeDelincuencia: "baja",
    esCapital: true,
};
console.log(cuenca.nombre); // Cuenca
console.log(cuenca.poblacion); // 600000
console.log(cuenca.nivelDeDelincuencia); // baja
console.log(cuenca.esCapital); // true

