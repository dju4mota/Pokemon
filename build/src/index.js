"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// faz o papel de interface com usuario, pega as entradas e comunica com o TeamBuilder
const API_Handler_1 = require("./adapters/API_Handler");
const TeamBuilder_1 = require("./services/TeamBuilder");
const tb = new TeamBuilder_1.TeamBuilder(new API_Handler_1.API_Handler());
