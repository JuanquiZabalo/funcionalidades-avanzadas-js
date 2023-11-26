// Escribe tu código aquí:
/*Dado un arreglo con nombres de frutas, utiliza destructuring 
para obtener el primer y último elemento. */

const fruits = ['Manzana', 'Plátano', 'Naranja', 'Uva']

const [firstFruit, , , lastFruit] = fruits

console.log(`Primera fruta: ${firstFruit}`)
console.log(`Última fruta: ${lastFruit}`)