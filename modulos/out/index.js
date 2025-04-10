import { Soma, Subtracao, Divisao, Multiplicacao } from "./calculos.js";
var somador = new Soma();
var subtrador = new Subtracao();
var divisor = new Divisao();
var multiplicador = new Multiplicacao();
console.log("Soma: ".concat(somador.calcular(2, 2)));
console.log("Subtra\u00E7\u00E3o ".concat(subtrador.calcular(10, 5)));
console.log("Divis\u00E3o: ".concat(divisor.calcular(2, 2)));
console.log("Multiplica\u00E7\u00E3o: ".concat(multiplicador.calcular(10, 5)));
