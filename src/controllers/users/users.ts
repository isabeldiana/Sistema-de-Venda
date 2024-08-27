import { Request, Response } from 'express';
import { usersDto } from './users.dto';
import * as bcrypt from 'bcrypt';
import prisma from '../../database/database';
 

const createUser = async (req: Request, res: Response) =>{
 try {
  const {name, email, password } : usersDto = req.body

 if(!name || !email || !password){
  return res.status(401).json({message:'Todos os campos devem ser preenchidos'});
 }
 const existEmail = await prisma.user.findFirst({where: {email: email}})

 if(existEmail){
  return res.status(404).json({message: `Email: ${existEmail.email} já existe. Favor insira uma novo`})
 }
 const hashedPassword = await bcrypt.hash(password, 10);

 const newUser = await prisma.user.create({
  data: {
    name,
    email,
    password: hashedPassword,
    createdAt: new Date() 
   }})


  return res.status(201).json(newUser)

 } catch (error) {
  return res.status(500).json({ error: "Internal server error"})
 
  
 }
}

export default {
  createUser
}