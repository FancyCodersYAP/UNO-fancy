import express from 'express';
import { proxy } from '../middlewares/proxy';
import cors from 'cors';
import { themeRoutes } from '../routes/themeRoutes';
import { forumRoute } from '../routes/forumRoute';
const app = express();
app.use(cors());

app.use('/theme-service', themeRoutes);
app.use('/api/forum', forumRoute);
app.use('/api/v2/*', proxy);
export default app;
