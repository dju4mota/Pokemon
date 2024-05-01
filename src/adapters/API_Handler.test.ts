/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_Handler } from './API_Handler'
import { charmander,clefairy,bulbasaur, psyduck} from '../models/PokemonsConst'
import { API_HandlerInterface } from '../repository/API_HandlerInterface'

describe('Testing API Handler with static clone of the API', () => {
  
  let apiHandler: API_HandlerInterface
  beforeEach(() => { 
     apiHandler = new API_Handler()
  })

  describe('GET Pokemon by ID', () => {

    test('should get clefairy, id 35', () => {
      const poke = apiHandler.getPokemonByPokemonId(35)
      expect(poke).toEqual({ success: clefairy, error: null })
    })

    test('should get charmander, id 4', () => {
      const poke = apiHandler.getPokemonByPokemonId(4)
      expect(poke).toEqual({ success: charmander, error: null })
    })

    test('should get bulbasaur, id 1', () => {
      const poke = apiHandler.getPokemonByPokemonId(1)
      expect(poke).toEqual({ success: bulbasaur, error: null })
    })

    test('should return error when trying to get pokemon with id 0', () => {
      const poke = apiHandler.getPokemonByPokemonId(0)
      expect(poke).toEqual({ success: null, error: 'Cannot get pokemon with id: 0 from PokeAPI' })
    })
  })

  describe('GET Stats by ID', () => {

    test('should get stats from clefairy, id 35', () => {
      const stats = apiHandler.getStatsByPokemonId(35)
      expect(stats).toEqual({ success: [70, 45, 48, 60, 65, 35, 323], error: null })
    })

    test('should get stats from charmander, id 4', () => {
      const stats = apiHandler.getStatsByPokemonId(4)
      expect(stats).toEqual({ success: [39, 52, 43, 60, 50, 65, 309], error: null })
    })
    test('should get stats from bulbasaur, id 1', () => {
      const stats = apiHandler.getStatsByPokemonId(1)
      expect(stats).toEqual({ success: [45, 49, 49, 65, 65, 45, 318], error: null })
    })
    test('should return error when trying to get stats from pokemon with id 0', () => {
      const stats = apiHandler.getStatsByPokemonId(0)
      expect(stats).toEqual({ success: null, error: 'Cannot get stats from pokemon with id: 0 from PokeAPI' })
    })
  })

  describe('GET Type by ID', () => {
      
      test('should get type from clefairy, id 35', () => {
        const type = apiHandler.getTypeByPokemonId(35)
        expect(type).toEqual({ success: ['fairy'], error: null })
      })
  
      test('should get type from charmander, id 4', () => {
        const type = apiHandler.getTypeByPokemonId(4)
        expect(type).toEqual({ success: ['fire'], error: null })
      })
      test('should get type from bulbasaur, id 1', () => {
        const type = apiHandler.getTypeByPokemonId(1)
        expect(type).toEqual({ success: ['grass', 'poison'], error: null })
      })
      
  
      test('should return error when trying to get type from pokemon with id 0', () => {
        const type = apiHandler.getTypeByPokemonId(0)
        expect(type).toEqual({ success: null, error: 'Cannot get types from pokemon with id: 0 from PokeAPI' })
      
  })

})

})

