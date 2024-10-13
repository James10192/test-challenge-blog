import User from "../models/User.model.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res, next) => {
  const {username, email, password} = req.body;

  if (
    !username ||
    !email ||
    !password || 
    username === '' || 
    email === '' || 
    password === ''
    ) 
    {
    next(errorHandler(400, 'Tous les champs sont requis'))
  }



  const hashedPassword = bcrypt.hashSync(password, 10) 

  try { 
    
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.json('Incrisption réussie');

    } catch (error) {
      next(error);
    };

}