function add(sums: number | string, lettes: number | string): number | string {
    if (typeof sums === 'number' && typeof lettes === 'number') {
        return sums + lettes; 
    } else if (typeof sums === 'string' && typeof lettes === 'string') {
        return sums + lettes; 
    } else {
        return "No existen combinaciones posibles"; 
    }
}

console.log(add(5.2, 1.3)); 
console.log(add("Soy", " Estudiante")); 
console.log(add(0, " veces")); 