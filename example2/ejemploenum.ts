// Variable con varios tipos
let exersice: string | number | boolean;

// Inicialización
//exersice = "Hola"; // Aquí, variable es de tipo string
 exersice = 42; // Resultado : la variable es de tipo number, 42
//exersice = true; // Resultado : la variable es de tipo boolean, true

// Aserción de tipos
if (typeof exersice === "string") {
    console.log("La variable es de tipo string:", exersice);
} else if (typeof exersice === "number") {
    console.log("La variable es de tipo number:", exersice);
} else if (typeof exersice === "boolean") {
    console.log("La variable es de tipo boolean:", exersice);
}
