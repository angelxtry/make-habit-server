import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as logger from 'morgan';
import schema from './schema';

const app = express();
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

export default app;
