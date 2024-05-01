"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    verbose: true,
    reporters: [
        'default',
        ['jest-html-reporters', {
                pageTitle: 'Relatório de Testes',
                outputPath: 'relatorio_de_testes.html',
            }],
    ],
};
exports.default = config;
