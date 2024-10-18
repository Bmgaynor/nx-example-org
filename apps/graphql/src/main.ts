/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { initGraphql } from './graph';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';

async function init() {
  console.log('initializing server');
  const graphqlServer = await initGraphql();
  const app = express();

  app.use('/assets', express.static(path.join(__dirname, 'assets')));

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to graphql!' });
  });

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(graphqlServer)
  );

  const port = process.env.PORT || 3333;

  const server = app.listen(port, () => {
    console.log(
      `Listening at http://localhost:${port}/api &  http://localhost:${port}/graphql`
    );
  });
  server.on('error', console.error);
}

init();
