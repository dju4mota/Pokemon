"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(name = "", id = 0, pokedex = 0, type = [], stats = [], total = 0, moves = []) {
        this.name = "";
        this.id = 0;
        this.pokedex = 0;
        this.type = [];
        this.stats = [];
        this.total = 0;
        this.moves = [];
        this.name = name;
        this.id = id;
        this.pokedex = pokedex;
        this.type = type;
        this.stats = stats;
        this.total = total;
        this.moves = moves;
    }
}
exports.Pokemon = Pokemon;
