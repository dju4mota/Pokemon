import { Pokemon } from "../models/Pokemon";
import { FakeAPI } from "../repository/FakeAPi";
import {API_HandlerInterface, Response} from "../repository/API_HandlerInterface"

// faz as requisoções para a API e formata os dados
export class API_Handler implements API_HandlerInterface{
    
    private api: FakeAPI = new FakeAPI()

    getPokemonNameById(id: number): string {
        const res = this.api.getPokemon(id)
        return res?.name ?? ""
    }

    getPokemonByPokemonId(id: number): { success: unknown; error: unknown; } {
        try{
            const res = this.api.getPokemon(id)
            const pokemon = new Pokemon()
            pokemon.name = res?.name ?? ""
            pokemon.id = res?.id ?? 0
            pokemon.pokedex = pokemon.id

            for(var i = 0; i < res!.types.length; i++){
                pokemon.type.push(res!.types[i].type.name)    
            }   

            for(var i = 0; i < res!.stats.length; i++){
                pokemon.stats.push(res!.stats[i].base_stat)    
            }
        
            pokemon.total = pokemon.stats.reduce((a, b) => a + b, 0)    

            // for(var i = 0; i < res!.moves.length; i++){
            //     pokemon.moves.push(res!.moves[i].move.name)
            // }


            return {
                success: pokemon,
                error: null
            }
        } catch (error){
            return {
                success: null,
                error: 'Cannot get pokemon with id: ' + id + ' from PokeAPI'
              }
        }
    }

    getStatsByPokemonId(id: number): { success: unknown; error: unknown; } {
        try{
            const res = this.api.getPokemon(id)
            let statsList: number[] = []
            
            for(var i = 0; i < res!.stats.length; i++){
                statsList.push(res!.stats[i].base_stat)    
            }
            statsList.push(statsList[0] + statsList[1] + statsList[2] + statsList[3] + statsList[4] + statsList[5])

            return {
                success: statsList,
                error: null
            }
        } catch (error){
            return {
                success: null,
                error: 'Cannot get stats from pokemon with id: ' + id + ' from PokeAPI'
              }
        }
    }
    getTypeByPokemonId(id: number): { success: unknown; error: unknown; } {
        try{
            const res = this.api.getPokemon(id)
            let typesList: string[] = []
            
            for(var i = 0; i < res!.types.length; i++){
                typesList.push(res!.types[i].type.name)    
            }   

            return {
                success: typesList,
                error: null
            }
        } catch (error){
            return {
                success: null,
                error: 'Cannot get types from pokemon with id: ' + id + ' from PokeAPI' 
              }
        }
    }

    getMovesByPokemonId(id: number): { success: unknown; error: unknown; } {
        throw new Error("Method not implemented.");
    }

    getMoveByMoveId(id: number): { success: unknown; error: unknown; } {
        throw new Error("Method not implemented.");
    }

}