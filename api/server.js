import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'

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

app.use(express.json());

app.listen(5173, () => {
  console.log('Serveur tournant sur le port 5173');
})

app.use('/api/user', userRoutes );
app.use('/api/auth', authRoutes );

app.use((err, req, res, next) =>{
  const statutsCode = err.statusCode || 500;
  const message = err.message || 'Erreur du serveur interne';
  res.status(statusCode).json({
    succes: false,
    statusCode,
    message
  });

});