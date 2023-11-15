type FormaDeConducir = (pista: Pista) => number

export class Piloto {
  formaConducir: (pista: Pista) => number = cabulero

  tiempoDeVuelta(pista: Pista): number {
    return this.formaConducir(pista)
  }
}
// Puedo no tipar la función y el lenguaje infiere el tipo automáticamente.
export const audaz = (tiempoCurva = 1) => {
  return (pista: Pista): number => {
    return pista.cantidadCurvas * tiempoCurva * pista.largoPorVuelta
  }
}

export const VALOR_BASE = 30

export const virtuoso: (_: number) => FormaDeConducir = (nivelVirtuosismo = 1) => {
  return (pista: Pista): number => {
    return pista.largoPorVuelta * (VALOR_BASE / nivelVirtuosismo)
  }
}

// Puedo evitar las llaves y el return si es una arrow function de pregunta y no de acción.
export const cabulero: FormaDeConducir = (pista: Pista): number => pista.largoPorVuelta * efectoMultiplicador(pista)


const efectoMultiplicador = (pista: Pista) => {
  return pista.nombrePar() ? MULTIPLICADOR_PAR : MULTIPLICADOR_IMPAR
}
export class Pista {
  constructor(public nombre = '', public largoPorVuelta = 0, public cantidadCurvas = 7) { }

  nombrePar(): boolean {
    return this.nombre.length % 2 === 0
  }
}

export const MULTIPLICADOR_PAR = 10
export const MULTIPLICADOR_IMPAR = 9