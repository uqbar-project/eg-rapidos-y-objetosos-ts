export class Piloto {
  public formaConducir: (pista: Pista) => number = cabulero

  public tiempoDeVuelta(pista: Pista): number {
    return this.formaConducir(pista)
  }
}

export const audaz = (tiempoCurva = 1) => {
  return (pista: Pista): number => {
    return pista.cantidadCurvas * tiempoCurva * pista.largoPorVuelta
  }
}

export const VALOR_BASE = 30

export const virtuoso = (nivelVirtuosismo = 1) => {
  return (pista: Pista): number => {
    return pista.largoPorVuelta * (VALOR_BASE / nivelVirtuosismo)
  }
}

export const cabulero = (pista: Pista): number => {
  return pista.largoPorVuelta * efectoMultiplicador(pista)
}

const efectoMultiplicador = (pista: Pista) => {
  return pista.nombrePar() ? MULTIPLICADOR_PAR : MULTIPLICADOR_IMPAR
}
export class Pista {
  constructor(public nombre = '', public largoPorVuelta = 0, public cantidadCurvas = 7) { }

  public nombrePar(): boolean {
    return this.nombre.length % 2 === 0
  }
}

export const MULTIPLICADOR_PAR = 10
export const MULTIPLICADOR_IMPAR = 9