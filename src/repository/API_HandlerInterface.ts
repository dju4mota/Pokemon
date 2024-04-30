import { Pokemon } from "../models/Pokemon"

export type Response = {
    success: unknown,
    error: unknown
}

export interface API_HandlerInterface {

    getPokemonByPokemonId(id: number): Response
    getStatsByPokemonId(id: number): Response
    getTypeByPokemonId(id: number): Response
    getMovesByPokemonId(id: number): Response
    getMoveByMoveId(id: number): Response
    
}