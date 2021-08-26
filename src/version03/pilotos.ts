export class Piloto {
  formaConducir: FormaConducir = cabulero

  tiempoDeVuelta(pista: Pista): number {
    return this.formaConducir.tiempoDeVuelta(pista)
  }
}

interface FormaConducir {
  tiempoDeVuelta(pista: Pista): number
}

class Cabulero {
  tiempoDeVuelta(pista: Pista) {
    return pista.largoPorVuelta * this.efectoMultiplicador(pista)
  }

  efectoMultiplicador(pista: Pista) {
    return pista.nombrePar() ? MULTIPLICADOR_PAR : MULTIPLICADOR_IMPAR
  }
}

export class Audaz {
  constructor(private tiempoCurva = 1) { }

  tiempoDeVuelta(pista: Pista): number {
    return pista.cantidadCurvas * this.tiempoCurva * pista.largoPorVuelta
  }
}

export const VALOR_BASE_VIRTUOSISMO = 30

export class Virtuoso {
  constructor(private nivelVirtuosismo = 1) { }

  tiempoDeVuelta(pista: Pista): number {
    return pista.largoPorVuelta * (VALOR_BASE_VIRTUOSISMO / this.nivelVirtuosismo)
  }
}

export const cabulero = new Cabulero()
export class Pista {
  constructor(public nombre = '', public largoPorVuelta = 0, public cantidadCurvas = 7) { }

  nombrePar(): boolean {
    return this.nombre.length % 2 === 0
  }
}

export const MULTIPLICADOR_PAR = 10
export const MULTIPLICADOR_IMPAR = 9