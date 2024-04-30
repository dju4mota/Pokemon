import { Pokemon } from "../models/Pokemon";
import { API_HandlerInterface } from "../repository/API_HandlerInterface";

// conversa com o index e o dbHandler
// CRUD dos pokemons no time ?
class TeamBuilder {
    private bd: API_HandlerInterface
    private team: Pokemon[] = []
    
    constructor(bd: API_HandlerInterface){
        this.bd = bd
    }

    // adiciona um pokemon ao time
    addPokemon(pokemonId: number){
        const res = this.bd.getPokemonByPokemonId(pokemonId)
        if(res.success){
            this.team.push(res.success as Pokemon)
        }
    }

    getPokemonOnDById(pokemonId: number){
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

    // retorna o time ordenado por tipo
    getTeamByType(type: string){
        return this.team.filter(pokemon => pokemon.type.includes(type))
    }

    // retorna Pokemon com maior stat
    getStrongestPokemon(){
        return this.team.reduce((prev, current) => (prev.total > current.total) ? prev : current)
    }

    // retorna Pokemon com menor stat
    getWeakestPokemon(){
        return this.team.reduce((prev, current) => (prev.total < current.total) ? prev : current)
    }

    // retorna pokemon por id
    getPokemonOnTeamById(pokemonId: number){
        return this.team.find(pokemon => pokemon.id === pokemonId)
    }


}