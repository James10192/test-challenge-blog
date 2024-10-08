import User from "../models/User.model.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
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
    return res.status(400).json({ message: 'Tous les champs sont requis'})
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
      console.error(error);
      res.status(500).json({ message: 'Erreur du serveur', error });
    
    };

}