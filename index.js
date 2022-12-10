// const { listContacts, addContact, removeContact } = require('./contacts.js');
// listContacts();
// addContact('22', 'te222222st')
// removeContact('Max')

// const got = import('got');
// const got = require('got');
import express from 'express';
import morgan from 'morgan';
import { got } from 'got';
import dotenv from 'dotenv';
import got from 'got';
import { postRouter } from './routers/postsRouter.js';
import { ListCollectionsCursor, MongoClient } from 'mongodb';
dotenv.config();

const app = express();
app.use(morgan('tiny'));
app.use(cors())

const PORT = process.env.PORT;
const BASE_URL = 'https://api.weatherbit.io/v2.0/current';

app.get('/api/weather', async (req, res) => {
  try {
    const { city_to_search } = req.query;

    const options = {
      searchParams: {
        key: process.env.WEATHER_API_KEY,
        city: city_to_search,
        lang: 'uk',
      },
    };
    const response = await got(BASE_URL, options).json();

const start = async () => {
  const client = new MongoClient(process.env.MONGO_URL)
  await client.connect()
  const db = client.db('MyNewDataBase');
  const collection = db.collection('posts');
  const posts = await collection.find({}).toArray()
  console.log(posts);
  app.listen(PORT, err => {
    if (err) {
      console.log(`Ошибка!!! ${err}`);
    }
    console.log(`Сервер запущен на порте: ${PORT}`);
  });
}

start()
