import { ApolloServer } from '@apollo/server';

import { readFileSync } from 'fs';
import path from 'path';
import { Resolvers } from './__generated__/resolvers-types';
const typeDefs = readFileSync(path.join(__dirname, './schema.graphql'), {
  encoding: 'utf-8',
});

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    subTitle: 'The third',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
};
export interface MyContext {
  token?: string;
}
export async function initGraphql() {
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
  });

  await server.start();
  return server;
}
