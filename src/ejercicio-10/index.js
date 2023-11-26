// Escribe tu código aquí:
/*Crea un Map llamado `personas` que almacene nombres como 
claves y edades como valore## Ejercicio Agrega algunas personas 
al Map y luego realiza operaciones como obtener la edad de una 
persona y eliminar a alguien del Map. */

// Map() equivalente a los dict() en Python
// Metodo set(key, valor) -> anade una clave y un valor al objeto Map
// Metodo get(key) -> obtiene el valor del elemento mediante su clave 
// delete(key) -> elimina un elemento del objeto mediante su clave
const personas = new Map()

personas.set('Alice', 30)
personas.set('Bob', 25)
personas.set('Charlie', 35)

console.log('Edad de Alice:', personas.get('Alice'))

const personToRemove = 'Bob'
personas.delete(personToRemove)

console.log('Personas en el Map después de eliminar a Bob:', personas)