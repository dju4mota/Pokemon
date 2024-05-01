import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  verbose:true,
  reporters:  [
    'default',
    ['jest-html-reporters', {
      pageTitle: 'Relatório de Testes',
      outputPath: 'relatorio_de_testes.html',
    }],
  ],

}

export default config
