import express from 'express';
import { proxy } from '../middlewares/proxy';
import { createClientAndConnect } from '../db';
import cors from 'cors';

const app = express();
app.use(cors());
app.use('/api/v2/*', proxy);
export default app;
