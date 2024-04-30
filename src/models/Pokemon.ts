export class Pokemon {
    name: string = ""
    id: number = 0
    pokedex:number = 0
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