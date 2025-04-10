import { Soma, Subtracao, Divisao, Multiplicacao } from "./calculos"

let somador = new Soma()
let subtrador = new Subtracao()
let divisor = new Divisao()
let multiplicador = new Multiplicacao()

console.log(`Soma: ${somador.calcular(2, 2)}`)
console.log(`Subtração ${subtrador.calcular(10, 5)}`)
console.log(`Divisão: ${divisor.calcular(2, 2)}`)
console.log(`Multiplicação: ${multiplicador.calcular(10, 5)}`)