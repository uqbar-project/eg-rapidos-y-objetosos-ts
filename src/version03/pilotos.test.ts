import { Audaz, Piloto, Pista } from './pilotos'

describe('piloto cabulero', () => {
  let pilotoCabulero: Piloto

  beforeEach(() => {
    pilotoCabulero = new Piloto()
  })

  test('en una pista par multiplica por 10', () => {
    const pistaPar = new Pista('Monaco', 5)
    expect(50).toBe(pilotoCabulero.tiempoDeVuelta(pistaPar))
  })

  test('en una pista impar multiplica por 9', () => {
    const pistaImpar = new Pista('Estoril', 5)
    expect(45).toBe(pilotoCabulero.tiempoDeVuelta(pistaImpar))
  })
})

describe('piloto audaz', () => {
  let pilotoAudaz: Piloto
  let pista: Pista

  beforeEach(() => {
    pilotoAudaz = new Piloto()
    pilotoAudaz.formaConducir = new Audaz(3)
    pista = new Pista('Estoril', 5, 5)
  })

  test('en una pista común', () => {
    expect(75).toBe(pilotoAudaz.tiempoDeVuelta(pista))
  })
})

describe('piloto con una forma de conducir especial', () => {
  let pilotoAudaz: Piloto
  let pista: Pista

  beforeEach(() => {
    pilotoAudaz = new Piloto()
    pilotoAudaz.formaConducir = {
      tiempoDeVuelta(unaPista: Pista) {
        return unaPista.nombre.length * 10
      }
    }
    pista = new Pista('Estoril')
  })

  test('en una pista', () => {
    expect(70).toBe(pilotoAudaz.tiempoDeVuelta(pista))
  })
})
