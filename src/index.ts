import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import app from './app';
import connectionOptions from './ormconfig';

dotenv.config();

const PORT: number | string = process.env.PORT || 4000;

const appStart = () => console.log(`Listening on port ${PORT}`);

createConnection(connectionOptions).then(() => {
  app.listen(PORT, appStart);
});
