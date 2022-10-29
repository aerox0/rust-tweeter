import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: 'http://127.0.0.1:4000/graphql',
   documents: ['src/**/*.tsx', 'src/**/*.ts'],
   generates: {
      './src/gql/': {
        preset: 'client',
        plugins: []
      }
   }
}

export default config