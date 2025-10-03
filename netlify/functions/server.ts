import { Handler } from '@netlify/functions';
import express from 'express';
import { registerRoutes } from '../../server/routes';
import serverlessExpress from '@vendia/serverless-express';

let serverlessExpressInstance: any;

async function setup() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  await registerRoutes(app);
  
  return serverlessExpress({ app });
}

export const handler: Handler = async (event, context) => {
  if (!serverlessExpressInstance) {
    serverlessExpressInstance = await setup();
  }
  
  return serverlessExpressInstance(event, context);
};