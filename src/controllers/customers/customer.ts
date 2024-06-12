import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { CustomerDto } from './custumer.dto';

const prisma = new PrismaClient();


const createCustomer = async (req: Request, res: Response,) => {
  const { name, email, phone,  createdAt, updatedAt, Sales }: CustomerDto = req.body;

  try {
    
    if ( !name || !email || ! phone ) {
      return res.status(400).json({ error: "Os campos name, email, phone precisam ser preenchidos" });
    }

    const newCustomer = await prisma.customer.create({
      data: {
        name,
        email,
        phone,
        createdAt,
        updatedAt,
        Sales
      },
    });
    return res.status(201).json(newCustomer);
  } catch (error) {
    console.error("Erro de servidor:", error);
    return res.status(500).json({ error: "Erro de servidor" });
  }
};

export default  createCustomer 