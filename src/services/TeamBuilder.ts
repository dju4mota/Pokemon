import { Pokemon } from "../models/Pokemon";
import { API_HandlerInterface } from "../repository/API_HandlerInterface";

// conversa com o index e o dbHandler
// CRUD dos pokemons no time ?
export class TeamBuilder {
    private bd: API_HandlerInterface
    private team: Pokemon[] = []
    
    constructor(bd: API_HandlerInterface){
        this.bd = bd
    }

    async getIdList(ini:number, fim:number){
        let list:string[] = []
        for(let i = ini; i <= fim; i++){
            await this.bd.getPokemonNameById(i)
            .then((res) => list.push(i.toString() + " - " + res))
            
        }
        return list
    }

    // adiciona um pokemon ao time
    async addPokemon(pokemonId: number){
        const res = await this.bd.getPokemonByPokemonId(pokemonId)
        .then((res) => { this.team.push(res.success as Pokemon); return true})
        .catch((error) => {console.log(error); return false})
        return res
    }

    getPokemonById(pokemonId: number){
        return this.bd.getPokemonByPokemonId(pokemonId)
    }

    // remove um pokemon do time
    removePokemon(pokemonId: number){
        this.team = this.team.filter(pokemon => pokemon.id !== pokemonId)
    }

    // retorna o time
    getTeam(){
        return this.team
    }

    getTypesFromTeam(){
        let types:string[] = []
        this.team.forEach(pokemon => {
            types = types.concat(pokemon.type)
        })
        return types
    }


    // retorna o total de stats do time
    getTotalStats(){
        let totalStats = 0
        this.team.forEach(pokemon => {
            totalStats += pokemon.total
        })
        return totalStats
    }

    // retorna o time ordenado por total de stats
    getSortedTeam(){
        return this.team.sort((a, b) => b.total - a.total)
    }

    // retorna Pokemon com maior stat
    getStrongestPokemon(){
        if(this.team.length === 0){
            return null
        }
        return this.team.reduce((prev, current) => (prev.total > current.total) ? prev : current)
    }

    // retorna Pokemon com menor stat
    getWeakestPokemon(){
        if(this.team.length === 0){
            return null
        }
        return this.team.reduce((prev, current) => (prev.total < current.total) ? prev : current)
    }

    // retorna pokemon por id
    getPokemonOnTeamById(pokemonId: number){
        return this.team.find(pokemon => pokemon.id === pokemonId)
    }


}