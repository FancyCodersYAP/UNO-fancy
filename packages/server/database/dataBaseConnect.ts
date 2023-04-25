import * as path from 'path';
import { type SequelizeOptions, Sequelize } from 'sequelize-typescript';
import { Themes } from '../models/Themes';

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PORT,
} = process.env;

export const initPostgresDBConnection = async (): Promise<
  Sequelize | undefined
> => {
  let client;

  try {
    const sequelizeOptions: SequelizeOptions = {
      host: POSTGRES_HOST || 'localhost',
      port: Number(POSTGRES_PORT),
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      dialect: 'postgres',
      logging: false,
    };

    client = new Sequelize(sequelizeOptions);

    const modelsPath = path.join(__dirname, '../models');
    client.addModels([modelsPath]);

    const synced = await client.sync({ alter: true });

    if (synced) {
      console.log('  ➜ 🎸 Synchronized the Postgres database');
      await Themes.bulkCreate(
        [{ theme_name: 'dark' }, { theme_name: 'light' }],
        { ignoreDuplicates: true }
      );
    } else {
      console.log('⛔️ DB Sync error ⛔️');
    }

    console.log('  ➜ 🎸 Connected to the Postgres database');
  } catch (e) {
    console.log('  ➜ 🌐 DB Connection error ⛔️');
  }

  return client;
};
