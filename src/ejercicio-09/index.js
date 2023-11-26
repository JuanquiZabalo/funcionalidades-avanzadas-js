// Escribe tu código aquí:
/*Crea un Set vacío llamado `colors## Ejercicio Luego, 
agrega varios colores diferentes al Set y asegúrate de que no 
haya colores duplicado## Ejercicio Imprime la lista de colores 
en el Set y verifica si un color específico existe en el Set */

// Los Set() equivalentes a los conjuntos de python 
// Metodo add() -> anadir un nuevo elemento
// Metodo has() -> verifica si un elemento esta en el conjunto
const colors = new Set()

colors.add('Rojo')
colors.add('Verde')
colors.add('Azul')
colors.add('Rojo') // Intentar agregar un color duplicado

console.log('Colores en el Set:', colors)

const colorToCheck = 'Verde'
console.log(`¿${colorToCheck} existe en el Set? ${colors.has(colorToCheck)}`)