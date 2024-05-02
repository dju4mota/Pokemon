import { Pokemon } from "../models/Pokemon";
import { FakeAPI } from "../repository/FakeAPi";
import {API_HandlerInterface, Response} from "../repository/API_HandlerInterface"
import axios from "axios";

// faz as requisoções para a API e formata os dados
export class API_Handler implements API_HandlerInterface{
    
    private api: FakeAPI = new FakeAPI()

    async getPokemonNameById(id: number): Promise<string>{
        let response:string     
        try {
            response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
            .then((res) => { return res.data.name })
            .catch((error) => console.error(error));     
        } catch (error) {
            console.error(error);
            return "";
        }
        return response
        }

    async getPokemonByPokemonId(id: number): Promise<Response>{
        let response:Response     
        const pokemon = new Pokemon()
        try {
            response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
            .then((res) => { 
                pokemon.name = res?.data.name ?? ""
                pokemon.id = res?.data.id ?? 0
                pokemon.pokedex = pokemon.id

            for(var i = 0; i < res!.data.types.length; i++){
                pokemon.type.push(res!.data.types[i].type.name)    
            }   

            for(var i = 0; i < res!.data.stats.length; i++){
                pokemon.stats.push(res!.data.stats[i].base_stat)    
            }
        
            pokemon.total = pokemon.stats.reduce((a, b) => a + b, 0)  
            return {
                success: pokemon,
                error: null
            }})
            .catch((error) => {console.log(error) 
                return {                
                    success: null,
                    error: 'Cannot get stats from pokemon with id: ' + id + ' from PokeAPI' }
            })    
        } catch (error) {
            return {                
                success: null,
                error: 'Cannot get stats from pokemon with id: ' + id + ' from PokeAPI' }
        }    
        return response
    }

    async getStatsByPokemonId(id: number): Promise<Response> {
        let response:Response     
        let statsList: number[] = []
        try {
            response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
            .then((res) => {                               
                for(var i = 0; i < res!.data.stats.length; i++){
                    statsList.push(res!.data.stats[i].base_stat)    
                }
                statsList.push(statsList[0] + statsList[1] + statsList[2] + statsList[3] + statsList[4] + statsList[5])
            
                return {
                    success: statsList,
                    error: null
                }
            })
            .catch((error) => {console.log(error) 
                return {                
                    success: null,
                    error: 'Cannot get stats from pokemon with id: ' + id + ' from PokeAPI' }
            })    
        } catch (error) {
            return {                
                success: null,
                error: 'Cannot get stats from pokemon with id: ' + id + ' from PokeAPI' }
        }    
        return response
    }
    

    async getTypeByPokemonId(id: number): Promise<Response> {
        let response:Response     
        let typesList: string[] = []
        try {
            response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
            .then((res) => {      
                for(var i = 0; i < res!.data.types.length; i++){
                    typesList.push(res!.data.types[i].type.name)    
                }   
                return {
                    success: typesList,
                    error: null
                }
            })
            .catch((error) => {console.log(error) 
                return {                
                    success: null,
                    error: 'Cannot get types from pokemon with id: ' + id + ' from PokeAPI' }
            })    
        } catch (error) {
            return {                
                success: null,
                error: 'Cannot get types from pokemon with id: ' + id + ' from PokeAPI' }
        }    
        return response

    }

    getMovesByPokemonId(id: number): { success: unknown; error: unknown; } {
        throw new Error("Method not implemented.");
    }

    getMoveByMoveId(id: number): { success: unknown; error: unknown; } {
        throw new Error("Method not implemented.");
    }

}