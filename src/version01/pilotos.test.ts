import { Piloto } from './pilotos'

let pilotoCabulero: Piloto

describe('cuando un piloto es cabulero', () => {
  beforeEach(() => {
    pilotoCabulero = new Piloto()
  })

  test('su tiempo en una pista par multiplica por 10', () => {
    const pistaPar = {
      largoPorVuelta: 5,
      nombre: 'Monaco',
    }
    expect(50).toBe(pilotoCabulero.tiempoDeVuelta(pistaPar))
  })

  test('su tiempo en una pista impar multiplica por 9', () => {
    const pistaImpar = {
      largoPorVuelta: 5,
      nombre: 'Estoril',
    }
    expect(45).toBe(pilotoCabulero.tiempoDeVuelta(pistaImpar))
  })
})