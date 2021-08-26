import { Audaz, Piloto, Pista, Virtuoso } from './pilotos'

describe('cuando un piloto es cabulero', () => {
  let pilotoCabulero: Piloto

  beforeEach(() => {
    pilotoCabulero = new Piloto()
  })

  test('su tiempo en una pista par multiplica por 10', () => {
    const pistaPar = new Pista('Monaco', 5)
    expect(50).toBe(pilotoCabulero.tiempoDeVuelta(pistaPar))
  })

  test('su tiempo en una pista impar multiplica por 9', () => {
    const pistaImpar = new Pista('Estoril', 5)
    expect(45).toBe(pilotoCabulero.tiempoDeVuelta(pistaImpar))
  })
})

describe('cuando un piloto es audaz', () => {
  let pilotoAudaz: Piloto
  let pista: Pista

  beforeEach(() => {
    pilotoAudaz = new Piloto()
    pilotoAudaz.formaConducir = new Audaz(3)
    pista = new Pista('Estoril', 5, 5)
  })

  test('su tiempo en una pista depende de la cantidad de curvas', () => {
    expect(75).toBe(pilotoAudaz.tiempoDeVuelta(pista))
  })
})

describe('cuando un piloto es virtuoso', () => {
  let pilotoVirtuoso: Piloto

  beforeEach(() => {
    pilotoVirtuoso = new Piloto()
    pilotoVirtuoso.formaConducir = new Virtuoso(3)
  })

  test('su tiempo en una pista depende del nivel de virtuosismo', () => {
    const pista = new Pista('Jacarepagua', 4)
    expect(40).toBe(pilotoVirtuoso.tiempoDeVuelta(pista))
  })
})

describe('cuando un piloto tiene una forma de conducir especial', () => {
  let pilotoEspecial: Piloto
  let pista: Pista

  beforeEach(() => {
    pilotoEspecial = new Piloto()
    pilotoEspecial.formaConducir = {
      tiempoDeVuelta(unaPista: Pista) {
        return unaPista.nombre.length * 10
      },
    }
    pista = new Pista('Estoril')
  })

  test('el tiempo de vuelta utiliza la regla definida en la forma de conducir especial', () => {
    expect(70).toBe(pilotoEspecial.tiempoDeVuelta(pista))
  })
})