// Escribe tu código aquí:
/*Crea un objeto con un método que utilice `this## Ejercicio 
Luego, cambia el método a una arrow function y observa cómo 
cambia el comportamiento.*/

// This dentro de function representa al objeto que llama la funcion
//en este caso el objeto es person
const person = {name: 'John',
                greet: function(){
                    console.log(`Hola soy ${this.name}`)
                }
            }

person.greet()

// This en arrow funcion se refiere al objeto global en HTML que seria windows
// en js toma el valor undefined
const person2 ={name: 'Alice',
                greet: ()=>{
                    console.log(`Hola soy ${this.name}`)
                }
            }

person2.greet()