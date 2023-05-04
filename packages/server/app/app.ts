import express, { type Request, type Response, Errback } from 'express';

import { proxy } from '../middlewares/proxy';
import cors from 'cors';
import { themeRoutes } from '../routes/themeRoutes';
import { forumTopics } from '../routes/forumTopics';
import { forumMessages } from '../routes/forumMessages';
const app = express();

app.use(cors());
app.use('/theme-service', themeRoutes);
app.use('/api/forum/message', forumMessages);
app.use('/api/forum', forumTopics);
app.use('/api/v2/*', proxy);
app.use((err: Errback, req: Request, res: Response) => {
  res.status(500).end('internal server error');
});

export default app;
