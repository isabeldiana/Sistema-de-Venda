import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { CustomerDto } from './custumer.dto';

const prisma = new PrismaClient();


const createCustomer = async (req: Request, res: Response) => {
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

const showCustomerAll = async (req: Request, res: Response) => {
  try {

    const customers = await prisma.customer.findMany()

    if (!customers) {
      return res.status(404).json({ error: "Customer not found" });
    }

    return res.status(200).json(customers);
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};
const showCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.query as { id: any }; 


    const customer = await prisma.customer.findFirst({
      where: { id: id } 
    });

    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    return res.status(200).json(customer);
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};



export default  {createCustomer, showCustomerAll, showCustomer} 