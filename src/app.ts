import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as logger from 'morgan';
import schema from './schema';
import decodeJWT from './utils/decodeJWT';

const app = express();
app.use(cors());
app.use(helmet());
app.use(logger('dev'));

const authMiddleware = async (
  req: express.Request,
  _: unknown,
  next: express.NextFunction,
): Promise<void> => {
  const token = req.get('H-TOKEN');
  if (token) {
    const user = await decodeJWT(token);
    if (user) {
      req.user = user;
    } else {
      req.user = undefined;
    }
  }
  next();
};
app.use(authMiddleware);

const server = new ApolloServer({
  schema,
  context: ({ req }: { req: express.Request }) => ({ req }),
});
server.applyMiddleware({ app });

export default app;
