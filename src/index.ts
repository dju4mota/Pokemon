// faz o papel de interface com usuario, pega as entradas e comunica com o TeamBuilder
import {API_Handler} from "./adapters/API_Handler"

const tb = new API_Handler()

console.log(tb.getPokemonByPokemonId(35))
console.log(tb.getStatsByPokemonId(35))
console.log(tb.getTypeByPokemonId(35))
