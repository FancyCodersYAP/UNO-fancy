import dotenv from 'dotenv';
import app from './app/app';
import { startSSR } from './ssr';
import { initPostgresDBConnection } from './database/dataBaseConnect';

dotenv.config();

const port = Number(process.env.SERVER_PORT) || 3000;
app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
initPostgresDBConnection();
startSSR();
