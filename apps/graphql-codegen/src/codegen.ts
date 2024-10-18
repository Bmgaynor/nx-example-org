import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'apps/graphql/src/schema.graphql',
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
  },
};

export default config;
