import { ApolloServer } from '@apollo/server';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};
interface MyContext {
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
