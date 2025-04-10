"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiplicacao = exports.Divisao = exports.Subtracao = exports.Soma = void 0;
var Soma = /** @class */ (function () {
    function Soma() {
    }
    Soma.prototype.calcular = function (numero1, numero2) {
        return numero1 + numero2;
    };
    return Soma;
}());
exports.Soma = Soma;
var Subtracao = /** @class */ (function () {
    function Subtracao() {
    }
    Subtracao.prototype.calcular = function (numero1, numero2) {
        return numero1 - numero2;
    };
    return Subtracao;
}());
exports.Subtracao = Subtracao;
var Divisao = /** @class */ (function () {
    function Divisao() {
    }
    Divisao.prototype.calcular = function (numero1, numero2) {
        return numero1 / numero2;
    };
    return Divisao;
}());
exports.Divisao = Divisao;
var Multiplicacao = /** @class */ (function () {
    function Multiplicacao() {
    }
    Multiplicacao.prototype.calcular = function (numero1, numero2) {
        return numero1 * numero2;
    };
    return Multiplicacao;
}());
exports.Multiplicacao = Multiplicacao;
