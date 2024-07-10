import { Request, Response } from 'express';
import { products } from './products.dto';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


const createdProduct =  async (req: Request, res: Response)=>{
  const {name, description, price,stock} : products = req.body;


  try {
    
    if(!name || !description || !price || !stock ){
      return res.status(400).json({error: "Todos os campos devem ser preenchidos "})
    }

    const newProduct = await prisma.product.create({
      data:{
        name,
        description, 
        price,
        stock,
        createdAt: new Date(),  
        updatedAt: new Date() 
      }
    })
    return res.status(201).json(newProduct)

  } catch (error) {
    return res.status(500).json({error: "Error interno do servidor"})
  }
}

 const updateProduct = async (req:Request, res:Response)=>{
    try {
      const {id} = req.params;
      const {name, description, price}: products = req.body;

      const existId = await prisma.product.findFirst({where: {id:parseInt(id) }});
      if(!existId){
        return res.status(404).json({error:"Produto não encontrado"});
      }

     const updateProduct = await prisma.product.update({
      where: {id: parseInt(id)},
      data:{
        name, 
        description, 
        price,
        updatedAt: new Date()
      }
     })
      
     return res.status(201).json(updateProduct)
    } catch (error) {
      
    }
 }

 const stockEntry = async (req:Request, res:Response)=>{
  try {
    const {id} = req.params;
    const {stock}: products = req.body;

    const existId = await prisma.product.findFirst({where: {id:parseInt(id) }});
    if(!existId){
      return res.status(404).json({error:"Produto não encontrado"});
    }


    if (stock < 0) {
      return res.status(400).json({ error: "Valor de entrada no stock precisa ser igual ou maior que zero" });
    }
   const updateStock = await prisma.product.update({
    where: {id: parseInt(id)},
    data:{
    stock: existId.stock + stock,
     updatedAt: new Date()
    }
   })
    
   return res.status(201).json(updateStock)
  } catch (error) {
    
  return res.status(500).json({message:'Error Server'})
  }
}
export default {
  createdProduct,
  updateProduct,
  stockEntry
}