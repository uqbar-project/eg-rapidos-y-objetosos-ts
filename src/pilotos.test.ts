import { Piloto } from './pilotos'

let cabulero: Piloto

describe('cuando un piloto es cabulero', () => {
  beforeEach(() => {
    cabulero = new Piloto()
  })

  test('en una pista par multiplica por 10', () => {
    const pistaPar = {
      largoPorVuelta: 5,
      nombre: 'Monaco',
    }
    expect(50).toBe(cabulero.tiempoDeVuelta(pistaPar))
  })

  test('en una pista impar multiplica por 9', () => {
    const pistaImpar = {
      largoPorVuelta: 5,
      nombre: 'Estoril',
    }
    expect(45).toBe(cabulero.tiempoDeVuelta(pistaImpar))
  })
})
