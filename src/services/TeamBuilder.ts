import { Pokemon } from "../models/Pokemon";
import { API_HandlerInterface } from "../repository/API_Handler";

// conversa com o index e o dbHandler
// CRUD dos pokemons no time ?
class TeamBuilder {
    private bd: API_HandlerInterface
    private team: Pokemon[] = []
    
    constructor(bd: API_HandlerInterface){
        this.bd = bd
    }

    


}