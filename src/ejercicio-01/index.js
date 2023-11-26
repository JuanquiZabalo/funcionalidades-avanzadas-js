// Escribe tu código aquí:
/*Dado un arreglo de números, utiliza una arrow function para 
elevar cada número al cuadrado y crea un nuevo arreglo con los 
resultados.*/

const numeros = [2, 4, 5]

const cuadrados = numeros.map(function(numb){return numb*numb})
console.log(cuadrados)