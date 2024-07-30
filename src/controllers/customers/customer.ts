import { Request, Response } from 'express';
import { CustomerDto } from './custumer.dto';
import prisma from '../../database/database';



const createCustomer = async (req: Request, res: Response) => {
  const { name, email, phone}: CustomerDto = req.body;

  try {
    if ( !name || !email || ! phone ) {
      return res.status(400).json({ error: "Os campos name, email, phone precisam ser preenchidos" });
    }
   const emailExist =  await prisma.customer.findFirst({ where: {email}})
     if( emailExist){
      return res.status(400).json({ error: "Este email já existe, favor inserir um novo" });

     }
    const newCustomer = await prisma.customer.create({
      data: {
        name,
        email,
        phone,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
    });
    return res.status(201).json(newCustomer);
  } catch (error) {
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

const updateCustomer = async (req: Request, res: Response) =>{
 try {
  const { id } =req.params
  const { name, email, phone }: CustomerDto = req.body;

  const existId = await prisma.customer.findFirst({where:{ id: parseInt(id) }});
  if(!existId){
    return res.status(400).json({ error: "Este id: ${id} informado não foi encontrado" });
  }
  const emailExist =  await prisma.customer.findFirst({ where: {email}})
     if(emailExist){
      return res.status(400).json({ error: "Este email já existe, favor inserir um novo" });
     }
  const updateCustomer = await prisma.customer.update({
    where: { id: parseInt(id) },
    data:{
      name,
      email, 
      phone,  
      updatedAt: new Date()
    }
  })
   return res.status(201).json(updateCustomer)
 } catch (error) {
  
  return res.status(500).json({message:'Error Server'})
 }
}

export default  {createCustomer, showCustomerAll, showCustomer, updateCustomer} 