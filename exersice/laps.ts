function divisibleBy(divisor: number, n: number) {
    return n % divisor === 0;
}

function isLeapYear(year: number) {
    const isLeap = divisibleBy(4, year) && (!divisibleBy(100, year) || divisibleBy(400, year));
    
    if (isLeap) {
    console.log(`${year} es un año bisiesto.`);
    } else {
    console.log(`${year} no es un año bisiesto.`);
    }
    
    return isLeap;
}

export default isLeapYear;

const year = 2024;
isLeapYear(year);