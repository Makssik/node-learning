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
dotenv.config();

const app = express();
app.use(morgan('tiny'));

const PORT = process.env.PORT;
const BASE_URL = 'https://api.weatherbit.io/v2.0/current';

app.get('/api/weather/:city', async (req, res) => {
  try {
    const options = {
      searchParams: {
        key: process.env.WEATHER_API_KEY,
        city: req.params.city,
        lang: 'uk',
      },
    };
    const response = await got(BASE_URL, options).json();

    const { temp, city_name, weather } = response.data[0];
    res.end(
      `В городе ${city_name} погода ${weather.description} и температура ${temp} градусов`,
    );
  } catch (err) {
    res.json({ err: err.message });
  }
});
app.listen(PORT, err => {
  if (err) {
    console.log(`Ошибка!!! ${err}`);
  }
  console.log(`Сервер запущен на порте ${PORT}`);
});
