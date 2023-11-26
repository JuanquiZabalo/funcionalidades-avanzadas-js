// Escribe tu código aquí:
/*Dados dos arreglos, utiliza el spread operator para combinarlos en uno solo.
 */

// los ... descomponen en arreglo en sus valores individuales
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const combinedArray = [...arr1, ...arr2]

console.log(combinedArray) // [1, 2, 3, 4, 5, 6]