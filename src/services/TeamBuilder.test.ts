// unit tests for the TeamBuilder service using Jest and Mocks

import { API_Handler_Mock } from "../adapters/API_Handler_Mock"
import { TeamBuilder } from "./TeamBuilder"
import { clefairy, charmander, bulbasaur,jigglypuff,pikachu,meowth } from "../models/PokemonsConst"
import { API_HandlerInterface } from "../repository/API_HandlerInterface"


describe('Testing TeamBuilder with Mock', () => {
    let apiHandler : API_HandlerInterface;
    let tb: TeamBuilder;

    beforeEach(() => {
        apiHandler = new API_Handler_Mock()
        tb = new TeamBuilder(apiHandler)
    })

    describe( "addPokemon", () => {
        test('should add clefairy (35) to the team', () => {
            
            tb.addPokemon(35)

            expect(tb.getTeam()).toEqual([clefairy])
        })

        test('should add charmander (4) to the team', () => {

            tb.addPokemon(4)

            expect(tb.getTeam()).toEqual([charmander])
        })
        test('should add bulbasaur (1) to the team', () => {
            tb.addPokemon(1)
            expect(tb.getTeam()).toEqual([bulbasaur])
        })

        test('should add jigglypuff (39) to the team', () => {
            tb.addPokemon(39)
            expect(tb.getTeam()).toEqual([jigglypuff])
        })
        test('should add pikachu (25) to the team', () => {
            tb.addPokemon(25)
            expect(tb.getTeam()).toEqual([pikachu])
        })
        test('should add meowth (52) to the team', () => {
            tb.addPokemon(52)
            expect(tb.getTeam()).toEqual([meowth])
        })
        test('should not add pokemon with id 0 to the team', () => {
            tb.addPokemon(0)
            expect(tb.getTeam()).toEqual([])
        })
        test('should not add pokemon with id 0 to the team', () => {
            tb.addPokemon(0)

            expect(tb.getTeam()).toEqual([])
        })
    })

    describe( "removePokemon", () => {
        test('should remove clefairy (35) from the team', () => {
            tb.addPokemon(35)
            tb.removePokemon(35)

            expect(tb.getTeam()).toEqual([])
        })

        test('should remove charmander (4) from the team', () => {
            tb.addPokemon(4)
            tb.removePokemon(4)

            expect(tb.getTeam()).toEqual([])
        })
        test('should remove bulbasaur (1) from the team', () => {
            tb.addPokemon(1)
            tb.removePokemon(1)

            expect(tb.getTeam()).toEqual([])
        })

        test('should not remove pokemon with id 0 from the team', () => {
            tb.removePokemon(0)
            expect(tb.getTeam()).toEqual([])
        })
    })

    describe( "getTotalStats", () => {
        test('should return 323 for clefairy (35)', () => {
            tb.addPokemon(35)
            expect(tb.getTotalStats()).toBe(323)
        })

        test('should return 309 for charmander (4)', () => {
            tb.addPokemon(4)
            expect(tb.getTotalStats()).toBe(309)
        })
        test( "should return 632 for charmander (4) and clefairy (35)", () => {
            tb.addPokemon(35)
            tb.addPokemon(4)
            expect(tb.getTotalStats()).toBe(632)
        })
        test('should return 318 for bulbasaur (1)', () => {
            tb.addPokemon(1)
            expect(tb.getTotalStats()).toBe(318)
        })

        test('should return 950 for clefairy, charmandar, bulbassaur ', () => {
            tb.addPokemon(35)
            tb.addPokemon(4)
            tb.addPokemon(1)
            expect(tb.getTotalStats()).toBe(950)
        })


        test('should return 0 for empty team', () => {
            expect(tb.getTotalStats()).toBe(0)
        })
    })

    describe( "getSortedTeam", () => {
        test('should return team sorted by total stats', () => {
            tb.addPokemon(35)
            tb.addPokemon(4)

            expect(tb.getSortedTeam()).toEqual([clefairy, charmander])
        })

        test('should return team sorted by total types', () => {
            tb.addPokemon(4)
            tb.addPokemon(35)

            expect(tb.getSortedTeam()).toEqual([clefairy, charmander])
        })
    })

    describe( "getStrongestPokemon", () => {
        test('should return clefairy (35) as the strongest pokemon', () => {
            tb.addPokemon(35)
            tb.addPokemon(4)

            expect(tb.getStrongestPokemon()).toEqual(clefairy)
        })

        test('should return charmander (4) as the strongest pokemon', () => {
            tb.addPokemon(4)
            expect(tb.getStrongestPokemon()).toEqual(charmander)
        })
        test('should return null for empty team', () => {
            expect(tb.getStrongestPokemon()).toBeNull()
        })
        test('should return null for empty team', () => {
            tb.addPokemon(35)
            tb.removePokemon(35)
            expect(tb.getStrongestPokemon()).toBeNull()
        })

    })

    describe( "getWeakestPokemon", () => {
        test('should return charmander (4) as the weakest pokemon', () => {
            tb.addPokemon(35)
            tb.addPokemon(4)

            expect(tb.getWeakestPokemon()).toEqual(charmander)
        })

        test('should return clefairy (35) as the weakest pokemon', () => {
            tb.addPokemon(35)
            expect(tb.getWeakestPokemon()).toEqual(clefairy)
        })
        test('should return null for empty team', () => {
            expect(tb.getWeakestPokemon()).toBeNull()
        })
        test('should return null for empty team', () => {
            tb.addPokemon(35)
            tb.removePokemon(35)
            expect(tb.getWeakestPokemon()).toBeNull()
        })
    })

    describe( "getPokemonOnTeamById", () => {
        test('should return clefairy (35) from the team', () => {
            tb.addPokemon(35)
            expect(tb.getPokemonOnTeamById(35)).toEqual(clefairy)
        })
        test('should return clefairy (35) from the team', () => {
            tb.addPokemon(35)
            tb.addPokemon(4)
            tb.removePokemon(4)
            expect(tb.getPokemonOnTeamById(35)).toEqual(clefairy)
        })

        test('should return charmander (4) from the team', () => {
            tb.addPokemon(4)
            tb.addPokemon(35)
            expect(tb.getPokemonOnTeamById(4)).toEqual(charmander)  
        })

        test('should return charmander (4) from the team', () => {
            tb.addPokemon(4)
            expect(tb.getPokemonOnTeamById(4)).toEqual(charmander)  
        })

        test('should return null for empty team', () => {
            expect(tb.getPokemonOnTeamById(35)).toBeUndefined()
        })

        test('should return null for empty team', () => {
            tb.addPokemon(35)
            tb.removePokemon(35)
            expect(tb.getPokemonOnTeamById(35)).toBeUndefined()
        })

        test('should return null for empty team', () => {
            tb.addPokemon(35)
            tb.removePokemon(35)
            tb.addPokemon(4)
            tb.removePokemon(4)
            expect(tb.getPokemonOnTeamById(35)).toBeUndefined()
        })

    })


})
