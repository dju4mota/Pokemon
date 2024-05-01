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