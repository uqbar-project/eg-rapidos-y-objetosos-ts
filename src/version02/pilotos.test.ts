import { Piloto, Pista } from './pilotos'

let cabulero: Piloto

describe('cuando un piloto es cabulero', () => {
  beforeEach(() => {
    cabulero = new Piloto()
  })

  test('en una pista par multiplica por 10', () => {
    const pistaPar = new Pista('Monaco', 5)
    expect(50).toBe(cabulero.tiempoDeVuelta(pistaPar))
  })

  test('en una pista impar multiplica por 9', () => {
    const pistaImpar = new Pista('Estoril', 5)
    expect(45).toBe(cabulero.tiempoDeVuelta(pistaImpar))
  })
})