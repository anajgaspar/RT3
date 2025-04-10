class Soma {
    public calcular(numero1: number, numero2: number): number {
        return numero1 + numero2
    }
} 

class Subtracao {
    public calcular(numero1: number, numero2: number): number {
        return numero1 - numero2
    }
}

class Divisao {
    public calcular(numero1: number, numero2: number): number {
        return numero1 / numero2
    }
}

class Multiplicacao {
    public calcular(numero1: number, numero2: number): number {
        return numero1 * numero2
    }
}

export { Soma, Subtracao, Divisao, Multiplicacao }