import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(
    () => {console.log('Connecté à MongoDB')
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(5173, () => {
  console.log('Serveur tournant sur le port 5173');
})