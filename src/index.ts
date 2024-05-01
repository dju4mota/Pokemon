// faz o papel de interface com usuario, pega as entradas e comunica com o TeamBuilder
import {API_Handler} from "./adapters/API_Handler"
import { TeamBuilder } from "./services/TeamBuilder"

const tb = new TeamBuilder(new API_Handler())

