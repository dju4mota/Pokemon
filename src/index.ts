import readline from 'readline';
import {API_Handler} from "./adapters/API_Handler"
import { TeamBuilder } from "./services/TeamBuilder"
import axios from 'axios'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tb = new TeamBuilder(new API_Handler());
async function getPokemonNameById(id: number){
    try {
        await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
        .then((res) => {return res.data})
        .catch((error) => console.error(error));     
    } catch (error) {
        console.error(error);
        return "";
    }
}

async function menu() {
  rl.question('Escolha uma opção: \n 1. Adicionar um pokemon ao time \n 2. Ver um pokemon por ID \n 3. Ver um pokemon por ID do time \n 4. remover um pokemon por ID do time \n 5. ver o time \n 6. ver os stats total do time \n 7. ver o time ordenado \n 8. ver o pokemon mais forte \n 9. ver o pokemon mais fraco \n 10. Lista de Ids. \n 11. Sair \n', async (answer) => {
    switch(answer) {
      case '1':
        rl.question('Digite o id do pokemon: \n', async (id) => { 
            if( await tb.addPokemon(parseInt(id))){
                console.log("Pokemon adicionado com sucesso!")
                console.log("Seu time atual: ");
                console.log(tb.getTeam());
            } else {
                console.log("Erro ao adicionar pokemon")
            }
            menu();
        });
        break;
    case '2':
        rl.question('Digite o id do pokemon: \n', (id) => {
            console.log(tb.getPokemonById(parseInt(id)));
            menu();
        });
        break;
    case '3':
        rl.question('Digite o id do pokemon: \n', (id) => {
            console.log(tb.getPokemonOnTeamById(parseInt(id)));
            menu();
        });
        break;
    case '4':
        rl.question('Digite o id do pokemon: \n', (id) => {
            tb.removePokemon(parseInt(id));
            console.log("Seu time atual: ");
            console.log(tb.getTeam());
            menu();
        });
        break;
    case '5':
        console.log(tb.getTeam());
        break;       
    case '6':
        console.log(tb.getTotalStats());
        break;
    case '7':
        console.log(tb.getSortedTeam());
        break;
    case '8':
        console.log(tb.getStrongestPokemon());
        break;
    case '9':
        console.log(tb.getWeakestPokemon());
        break;    
    case '10':
        let ini = 1
        let fim = 100
        console.log("Lista de Ids: ");
        await tb.getIdList(ini,fim).then((res) => console.log(res));
        verMais(ini,fim)
        break;
    case '11':
        rl.close();
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
    }
    menu();
  });
}

menu();

async function verMais(ini:number, fim:number){
    rl.question('Deseja ver mais ? (sim |nao) \n', async (resposta) => {
        if(resposta == "sim"){
            ini += fim
            fim += fim
            await tb.getIdList(ini,fim).then((res) => console.log(res));
            verMais(ini,fim)
        } else {
            menu();
        }
    });
}