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

            for(var i = 0; i < res!.types.length; i++){
                pokemon.type.push(res!.types[i].type.name)    
            }   

            pokemon.hp = res?.stats[0].base_stat ?? 0
            pokemon.attack = res?.stats[1].base_stat ?? 0
            pokemon.defense = res?.stats[2].base_stat ?? 0
            pokemon.sp_attack = res?.stats[3].base_stat ?? 0
            pokemon.sp_defense = res?.stats[4].base_stat ?? 0
            pokemon.speed = res?.stats[5].base_stat ?? 0
            
            pokemon.total = pokemon.hp + pokemon.attack + pokemon.defense + pokemon.sp_attack + pokemon.sp_defense + pokemon.speed

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
                error: 'Cannot create task'
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
                error: 'Cannot get stats'
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
                error: 'Cannot get types'
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