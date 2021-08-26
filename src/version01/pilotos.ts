export class Piloto {
  private formaConducir = cabulero

  tiempoDeVuelta(pista: Pista): number {
    return this.formaConducir.tiempoDeVuelta(pista)
  }
}

export class Pista {
  // por defecto los atributos son públicos
  nombre = ''
  largoPorVuelta = 0
}

export const MULTIPLICADOR_PAR = 10
export const MULTIPLICADOR_IMPAR = 9

class Cabulero {
  tiempoDeVuelta(pista: Pista) {
    return pista.largoPorVuelta * this.efectoMultiplicador(pista)
  }

  efectoMultiplicador(pista: Pista) {
    const pistaNombrePar = pista.nombre.length % 2 === 0
    return pistaNombrePar ? MULTIPLICADOR_PAR : MULTIPLICADOR_IMPAR
  }
}

const cabulero = new Cabulero()