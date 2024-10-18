let palabra = prompt("Ingresa una palabra:");
let palabraLimpia = palabra.toLowerCase().replace(/\s+/g, '');
let palabraInvertida = palabraLimpia.split('').reverse().join('');
if (palabraLimpia === palabraInvertida) {
    alert("La palabra es un palíndromo.");
} else {
    alert("La palabra no es un palíndromo.");
}