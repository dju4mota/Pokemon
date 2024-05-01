import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  verbose:true,
  reporters: [['github-actions', {silent: false}], 'summary'],

}

export default config
