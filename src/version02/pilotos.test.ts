import { Piloto, Pista } from './pilotos'

let pilotoCabulero: Piloto

describe('cuando un piloto es cabulero', () => {
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