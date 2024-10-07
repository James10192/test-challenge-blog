import express from 'express';

const app = express();

app.listen(5173, () => {
  console.log('Serveur tournant sur le port 5173');
})