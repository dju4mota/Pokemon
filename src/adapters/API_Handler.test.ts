/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_Handler } from './API_Handler'

describe('Testing API Handler with mock', () => {
  
  describe('GET Pokemon by ID', () => {

    test('should get clefary, id 35', () => {
      const apiHandler = new API_Handler()
      const poke = apiHandler.getPokemonByPokemonId(35)
      
      expect(poke).toEqual({ success: clefairy, error: null })
    })

    test('should get charmander, id 4', () => {
      const apiHandler = new API_Handler()
      const poke = apiHandler.getPokemonByPokemonId(4)
      
      expect(poke).toEqual({ success: charmander, error: null })
    })


  })

  describe('GET Stats by ID', () => {

    test('should get stats from clefairy, id 35', () => {
      const apiHandler = new API_Handler()
      const stats = apiHandler.getStatsByPokemonId(35)
      
      expect(stats).toEqual({ success: [70, 45, 48, 60, 65, 35, 323], error: null })
    })

    test('should get stats from charmander, id 4', () => {
      const apiHandler = new API_Handler()
      const stats = apiHandler.getStatsByPokemonId(4)
      
      expect(stats).toEqual({ success: [39, 52, 43, 60, 50, 65, 309], error: null })
    })

  })

})


const clefairy = {
  name: 'clefairy',
  id: 35,
  pokedex: 35,
  type: ['fairy'],
  stats: [70, 45, 48, 60, 65, 35],
  total: 323,
  moves: []
}

const charmander = {
  name: 'charmander',
  id: 4,
  pokedex: 4,
  type: ['fire'],
  stats: [39, 52, 43, 60, 50, 65],
  total: 309,
  moves: []
}
