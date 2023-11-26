// Escribe tu código aquí:
const numbers = [2, 7, 4, 9, 6]

numbers.forEach((number) => {
  console.log(`El número ${number} es ${number % 2 === 0 ? 'par' : 'impar'}.`)
})