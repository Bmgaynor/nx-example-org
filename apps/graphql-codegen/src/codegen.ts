import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'apps/graphql/src/schema.graphql',
  documents: 'apps/nx-test/src/store/operations.ts',
  overwrite: true,
  watch: true,
  generates: {
    'apps/graphql/src/__generated__/resolvers-types.ts': {
      config: {
        scalars: { Date: Date, DateTime: Date, Object: Object },
        useIndexSignature: true,
        contextType: 'apps/graphql/src/graph#MyContext',
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
    'apps/nx-test/src/store/__generated__/': {
      preset: 'near-operation-file-preset',
      plugins: ['typescript-react-apollo', 'typescript-operations'],
      presetConfig: {
        baseTypesPath: './graphql-types.tsx',
        folder: '__generated__',
        extension: '.tsx',
      },
      config: {
        withHooks: true,
      },
    },
    'apps/nx-test/src/store/__generated__/graphql-types.tsx': {
      plugins: ['typescript'],
      config: {
        scalars: { Date: Date, DateTime: Date, Object: Object },
      },
    },
  },
};

export default config;
