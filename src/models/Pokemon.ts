export class Pokemon {
    name: string = ""
    id: number = 0
    pokedex:number = 0
    type: string[] = []
    hp: number = 0
    attack: number = 0
    defense: number = 0
    sp_attack: number = 0
    sp_defense: number = 0
    speed: number = 0
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