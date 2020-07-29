export class Piloto {
  private formaConducir = cabulero

  public tiempoDeVuelta(pista: Pista): number {
    return this.formaConducir.tiempoDeVuelta(pista)
  }
}

export class Pista {
  public nombre = ''
  public largoPorVuelta = 0
}

export const MULTIPLICADOR_PAR = 10
export const MULTIPLICADOR_IMPAR = 9

class Cabulero {
  public tiempoDeVuelta(pista: Pista) {
    return pista.largoPorVuelta * this.efectoMultiplicador(pista)
  }

  public efectoMultiplicador(pista: Pista) {
    const pistaNombrePar = pista.nombre.length % 2 === 0
    return pistaNombrePar ? MULTIPLICADOR_PAR : MULTIPLICADOR_IMPAR
  }
}

const cabulero = new Cabulero()