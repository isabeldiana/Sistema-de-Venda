import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from '../../database/database';
import { usersDto } from '../users/users.dto';


const login = async (req: Request, res: Response) =>{
    const {email, password } : usersDto = req.body

  try {

    const secret = process.env.JWT_HASH || 'secret';
    const user = await prisma.user.findFirst({where: {email}});

    if (!email || !password) {
        return res.status(400).json({ error: "Email e senha são obrigatórios" });
      }
    
    if(!user){
        return res.status(401).json({ error: "Invalid credentials"})
    }
   const validPassword = await bcrypt.compare(password, user.password)

    if(!validPassword){
        return res.status(401).json({error: "Invalid credentials"})
    }

    const token =  jwt.sign({userId: user?.id, email: user?.email}, secret, {expiresIn: "1h"} )
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error"})
 
  }

};

export default  {login }