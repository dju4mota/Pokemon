"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_Handler = void 0;
const Pokemon_1 = require("../models/Pokemon");
const FakeAPi_1 = require("../repository/FakeAPi");
// faz as requisoções para a API e formata os dados
class API_Handler {
    constructor() {
        this.api = new FakeAPi_1.FakeAPI();
    }
    getPokemonByPokemonId(id) {
        var _a, _b;
        try {
            const res = this.api.getPokemon(id);
            const pokemon = new Pokemon_1.Pokemon();
            pokemon.name = (_a = res === null || res === void 0 ? void 0 : res.name) !== null && _a !== void 0 ? _a : "";
            pokemon.id = (_b = res === null || res === void 0 ? void 0 : res.id) !== null && _b !== void 0 ? _b : 0;
            pokemon.pokedex = pokemon.id;
            for (var i = 0; i < res.types.length; i++) {
                pokemon.type.push(res.types[i].type.name);
            }
            for (var i = 0; i < res.stats.length; i++) {
                pokemon.stats.push(res.stats[i].base_stat);
            }
            pokemon.total = pokemon.stats.reduce((a, b) => a + b, 0);
            // for(var i = 0; i < res!.moves.length; i++){
            //     pokemon.moves.push(res!.moves[i].move.name)
            // }
            return {
                success: pokemon,
                error: null
            };
        }
        catch (error) {
            return {
                success: null,
                error: 'Cannot get pokemon with id: ' + id + ' from PokeAPI'
            };
        }
    }
    getStatsByPokemonId(id) {
        try {
            const res = this.api.getPokemon(id);
            let statsList = [];
            for (var i = 0; i < res.stats.length; i++) {
                statsList.push(res.stats[i].base_stat);
            }
            statsList.push(statsList[0] + statsList[1] + statsList[2] + statsList[3] + statsList[4] + statsList[5]);
            return {
                success: statsList,
                error: null
            };
        }
        catch (error) {
            return {
                success: null,
                error: 'Cannot get stats from pokemon with id: ' + id + ' from PokeAPI'
            };
        }
    }
    getTypeByPokemonId(id) {
        try {
            const res = this.api.getPokemon(id);
            let typesList = [];
            for (var i = 0; i < res.types.length; i++) {
                typesList.push(res.types[i].type.name);
            }
            return {
                success: typesList,
                error: null
            };
        }
        catch (error) {
            return {
                success: null,
                error: 'Cannot get types from pokemon with id: ' + id + ' from PokeAPI'
            };
        }
    }
    getMovesByPokemonId(id) {
        throw new Error("Method not implemented.");
    }
    getMoveByMoveId(id) {
        throw new Error("Method not implemented.");
    }
}
exports.API_Handler = API_Handler;
