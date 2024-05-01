import { Pokemon } from "../models/Pokemon";
import { FakeAPI } from "../repository/FakeAPi";
import {API_HandlerInterface, Response} from "../repository/API_HandlerInterface"

// Mock class for API_Handler
export class API_Handler_Mock implements API_HandlerInterface{

    getPokemonByPokemonId(id: number): Response {
        switch(id){
            case 35:
                return { success: new Pokemon("clefairy",35, 35, ["fairy"],[70, 45, 48, 60, 65, 35],  323), error: null }
            case 4:
                return { success: new Pokemon("charmander",4, 4, ["fire"],[39, 52, 43, 60, 50, 65],  309), error: null }
            case 1:
                return { success: new Pokemon("bulbasaur",1, 1, ["grass", "poison"],[45, 49, 49, 65, 65, 45],  318), error: null }
            case 66:
                return { success: new Pokemon("machop",66, 66, ["fighting"],[70, 80, 50, 35, 35, 35],  305), error: null }
            case 95:
                return { success: new Pokemon("onix",95, 95, ["rock", "ground"],[35, 45, 160, 30, 45, 70],  385), error: null }
            case 92:
                return { success: new Pokemon("gastly",92, 92, ["ghost", "poison"],[30, 35, 30, 100, 35, 80],  310), error: null }
            case 74:
                return { success: new Pokemon("geodude",74, 74, ["rock", "ground"],[40, 80, 100, 30, 30, 20],  300), error: null }
            case 39:
                return { success: new Pokemon("jigglypuff",39, 39, ["normal", "fairy"],[115, 45, 20, 45, 25, 20],  270), error: null }
            case 25:
                return { success: new Pokemon("pikachu",25, 25, ["electric"],[35, 55, 40, 50, 50, 90],  320), error: null }
            case 52:
                return { success: new Pokemon("meowth",52, 52, ["normal"],[40, 45, 35, 40, 40, 90],  290), error: null }
            case 90:
                return { success: new Pokemon("shellder",90, 90, ["water"],[30, 65, 100, 45, 25, 40],  305), error: null }
            case 7:
                return { success: new Pokemon("squirtle",7, 7, ["water"],[44, 48, 65, 50, 64, 43],  314), error: null }
            case 54:
                return { success: new Pokemon("psyduck",54, 54, ["water"],[50, 52, 48, 65, 50, 55],  320), error: null }
            case 23:
                return { success: new Pokemon("ekans",23, 23, ["poison"],[35, 60, 44, 40, 54, 55],  288), error: null }                
            default:
                return { success: null, error: 'Cannot get pokemon with id: ' + id + ' from PokeAPI' }
        
        }
    }


    getStatsByPokemonId(id: number): Response {
        switch(id){
            case 35:
                return { success: [70, 45, 48, 60, 65, 35, 323], error: null }
            case 4:
                return { success: [39, 52, 43, 60, 50, 65, 309], error: null }
            default:
                return { success: null, error: 'Cannot get stats from pokemon with id: ' + id + ' from PokeAPI' }
        }
    }

    getTypeByPokemonId(id: number): Response {
        switch(id){
            case 35:
                return { success: ['fairy'], error: null }
            case 4:
                return { success: ['fire'], error: null }
            default:
                return { success: null, error: 'Cannot get type from pokemon with id: ' + id + ' from PokeAPI' }
        }
    }

    getMovesByPokemonId(id: number): Response {
        throw new Error("Method not implemented.");
    }
    getMoveByMoveId(id: number): Response {
        throw new Error("Method not implemented.");
    }
    

}