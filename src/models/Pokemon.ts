export class Pokemon {
    
    
    constructor(name: string = "", id: number = 0, pokedex: number = 0, type: string[] = [], stats: number[] = [], total: number = 0, moves: Move[] = []) {
        this.name = name
        this.id = id
        this.pokedex = pokedex
        this.type = type
        this.stats = stats
        this.total = total
        this.moves = moves
    }

    name: string = ""
    id: number = 0
    pokedex: number = 0
    type: string[] = []
    stats: number[] = []
    total: number = 0
    moves: Move[] = []
}

export type Move = {
    name: string,
    type: string,
    category: string,
    pp: number,
    power: string,
    acuray: number,
    id: number
}