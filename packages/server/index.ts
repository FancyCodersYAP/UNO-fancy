import dotenv from 'dotenv';
import app from './app/app';
import { startSSR } from './ssr';
import { initPostgresDBConnection } from './database/dataBaseConnect';
import { Client } from 'pg';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env;

dotenv.config();

const port = Number(process.env.SERVER_PORT) || 3000;
app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});

initPostgresDBConnection();

startSSR();

export const createClientAndConnect = async (): Promise<Client | null> => {
  try {
    const client = new Client({
      user: POSTGRES_USER,
      host: 'postgres',
      database: POSTGRES_DB,
      password: POSTGRES_PASSWORD,
      port: Number(POSTGRES_PORT),
    });

    await client.connect();

    const res = await client.query('SELECT NOW()');
    console.log('  ➜ 🎸 !!!Connected to the database at:', res?.rows?.[0].now);
    client.end();

    return client;
  } catch (e) {
    console.error('next try', e);
  }

  return null;
};

createClientAndConnect();
