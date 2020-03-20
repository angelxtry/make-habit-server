import { ConnectionOptions } from 'typeorm';

const connectionOption: ConnectionOptions = {
  type: 'postgres',
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: ['src/entities/**/*.*'],
  host: process.env.DB,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

export default connectionOption;
