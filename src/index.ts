// faz o papel de interface com usuario, pega as entradas e comunica com o TeamBuilder
import {API_Handler} from "./adapters/DatabaseHandler"

const tb = new API_Handler()

console.log(tb.getPokemonByPokemonId(35))
