export class Piloto {
  private formaConducir = cabulero

  public tiempoDeVuelta(pista: Pista): number {
    return this.formaConducir.tiempoDeVuelta(pista)
  }
}

export class Pista {
  constructor(public nombre = '', public largoPorVuelta = 0) { }

  public nombrePar(): boolean {
    return this.nombre.length % 2 === 0
  }
}

export const MULTIPLICADOR_PAR = 10
export const MULTIPLICADOR_IMPAR = 9

class Cabulero {
  public tiempoDeVuelta(pista: Pista) {
    return pista.largoPorVuelta * this.efectoMultiplicador(pista)
  }

  public efectoMultiplicador(pista: Pista) {
    return pista.nombrePar() ? MULTIPLICADOR_PAR : MULTIPLICADOR_IMPAR
  }
}

const cabulero = new Cabulero()