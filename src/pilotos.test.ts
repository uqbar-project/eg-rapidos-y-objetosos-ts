import { audaz, Piloto, Pista, virtuoso } from './pilotos'

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

  beforeEach(() => {
    pilotoAudaz = new Piloto()
    pilotoAudaz.formaConducir = audaz(2)
  })

  test('su tiempo en una pista depende de la cantidad de curvas', () => {
    const pista = new Pista('Jacarepagua', 4)
    expect(56).toBe(pilotoAudaz.tiempoDeVuelta(pista))
  })
})

describe('cuando un piloto es virtuoso', () => {
  let pilotoVirtuoso: Piloto

  beforeEach(() => {
    pilotoVirtuoso = new Piloto()
    pilotoVirtuoso.formaConducir = virtuoso(3)
  })

  test('su tiempo en una pista depende del nivel de virtuosismo', () => {
    const pista = new Pista('Jacarepagua', 4)
    expect(40).toBe(pilotoVirtuoso.tiempoDeVuelta(pista))
  })
})