import { Pokemon } from "../models/Pokemon";
import { FakeAPI } from "../repository/FakeAPi";
import {API_HandlerInterface, Response} from "../repository/API_Handler"

// faz as requisoções para a API e formata os dados
export class API_Handler implements API_HandlerInterface{
    
    private api: FakeAPI = new FakeAPI()

    getPokemonByPokemonId(id: number): { success: unknown; error: unknown; } {
        try{
            const res = this.api.getPokemon(id)
            const pokemon = new Pokemon()
            pokemon.name = res?.name ?? ""
            pokemon.id = res?.id ?? 0
            pokemon.pokedex = pokemon.id
            return {
                success: pokemon,
                error: null
            }
        } catch (error){
            return {
                success: null,
                error: 'Cannot create task'
              }
        }
    }

    getStatsByPokemonId(id: number): { success: unknown; error: unknown; } {
        throw new Error("Method not implemented.");
    }
    getTypeByPokemonId(id: number): { success: unknown; error: unknown; } {
        throw new Error("Method not implemented.");
    }
    getMovesByPokemonId(id: number): { success: unknown; error: unknown; } {
        throw new Error("Method not implemented.");
    }
    
    getMoveByMoveId(id: number): { success: unknown; error: unknown; } {
        throw new Error("Method not implemented.");
    }

}