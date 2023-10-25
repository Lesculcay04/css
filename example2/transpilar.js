//Ejercicio de clase expuesto//
let firstName1;
let lastName1;
let fullName1;
let age1;
let ukCitizen1;

firstName1 = 'Rebecca';
lastName1 = 'Smith';
age1 = 42;
ukCitizen1 = false;
fullName1 = firstName1 + " " + lastName1;

if (ukCitizen1) {
    console.log("My name is " + fullName1 + ", I'm " + age1 + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName1 + ", I'm " + age1 + ", and I'm not a citizen of the United Kingdom.");
}