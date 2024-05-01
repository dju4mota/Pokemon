"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamBuilder = void 0;
// conversa com o index e o dbHandler
// CRUD dos pokemons no time ?
class TeamBuilder {
    constructor(bd) {
        this.team = [];
        this.bd = bd;
    }
    // adiciona um pokemon ao time
    addPokemon(pokemonId) {
        const res = this.bd.getPokemonByPokemonId(pokemonId);
        if (res.success) {
            this.team.push(res.success);
        }
    }
    getPokemonOnDById(pokemonId) {
        return this.bd.getPokemonByPokemonId(pokemonId);
    }
    // remove um pokemon do time
    removePokemon(pokemonId) {
        this.team = this.team.filter(pokemon => pokemon.id !== pokemonId);
    }
    // retorna o time
    getTeam() {
        return this.team;
    }
    // retorna o total de stats do time
    getTotalStats() {
        let totalStats = 0;
        this.team.forEach(pokemon => {
            totalStats += pokemon.total;
        });
        return totalStats;
    }
    // retorna o time ordenado por total de stats
    getSortedTeam() {
        return this.team.sort((a, b) => b.total - a.total);
    }
    // retorna Pokemon com maior stat
    getStrongestPokemon() {
        if (this.team.length === 0) {
            return null;
        }
        return this.team.reduce((prev, current) => (prev.total > current.total) ? prev : current);
    }
    // retorna Pokemon com menor stat
    getWeakestPokemon() {
        if (this.team.length === 0) {
            return null;
        }
        return this.team.reduce((prev, current) => (prev.total < current.total) ? prev : current);
    }
    // retorna pokemon por id
    getPokemonOnTeamById(pokemonId) {
        return this.team.find(pokemon => pokemon.id === pokemonId);
    }
}
exports.TeamBuilder = TeamBuilder;
