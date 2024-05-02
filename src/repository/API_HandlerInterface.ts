import { Pokemon } from "../models/Pokemon"

export type Response = {
    success: unknown,
    error: unknown
}

export interface API_HandlerInterface {

    getPokemonNameById(id: number): Promise<string>
    getPokemonByPokemonId(id: number):Promise<Response>
    getStatsByPokemonId(id: number): Promise<Response>
    getTypeByPokemonId(id: number):  Promise<Response>
    getMovesByPokemonId(id: number): Response
    getMoveByMoveId(id: number): Response
    
}