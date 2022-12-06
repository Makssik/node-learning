import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import got from 'got';
import { postRouter } from './routers/postsRouter.js';
dotenv.config();

const app = express();
app.use(morgan('tiny'));
app.use(express.json())
const PORT = process.env.PORT;

app.use('/api/posts', postRouter);

app.listen(PORT, err => {
  if (err) {
    console.log(`Ошибка!!! ${err}`);
  }
  console.log(`Сервер запущен на порте: ${PORT}`);
});
