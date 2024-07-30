import { Request, Response } from "express";
import { invoiceDTO } from "./sales.dto";
import prisma from "../../database/database";


const createSales = async (req: Request, res: Response) => {
  const { customerId, items }: { customerId: number; items: invoiceDTO[] } = req.body;

  try {
    let totalInvoicePrice = 0;
    let newCreatedInvoices = [];
    let totalQuantity = 0;
    let totalSalePrice = 0;
 let priceTotal = 0

    const customerExist = await prisma.customer.findFirst({ where: { id: customerId } });
    if (!customerExist) {
      return res.status(404).json({ error: "Cliente não encontrado." });
    }

    for (const item of items) {
      const { productId, quantity } = item;
      totalQuantity += item.quantity;
      const products = await prisma.product.findUnique({
        where: { id: productId },
        select: { price: true }
      });
      if (!products) {
        return res.status(404).json({ error: `Produto com ID ${productId} não encontrado.` });
      }
      priceTotal += products.price * quantity
     

    }
    totalSalePrice += priceTotal
    const sale = await prisma.sale.create({
      data: {
        customerId,
        quantity: totalQuantity,
        createdAt: new Date(),
        totalPrice: totalSalePrice,
      }
    });

    for (const item of items) {
      const { productId, quantity } = item;

      const productExist = await prisma.product.findFirst({ where: { id: productId } });
      if (!productExist) {
        return res.status(404).json({ error: "Produto não encontrado, informe um produto existente" });
      }

      if (quantity <= 0 || quantity > productExist.stock) {
        return res.status(400).json({ error: `Quantidade inválida. A quantidade deve ser maior que 0 e menor ou igual ao estoque disponível (${productExist.stock}).` });
      }

      const totalProductPrice = productExist.price * quantity;
      totalInvoicePrice += totalProductPrice;

      const createdInvoice = await prisma.invoice.create({
        data: {
          productId,
          customerId,
          quantity,
          totalProductPrice,
          createdAt: new Date(),
          saleId: sale.id
        }
      });

      newCreatedInvoices.push(createdInvoice);

      await prisma.product.update({
        where: { id: productId },
        data: {
          stock: productExist.stock - quantity,
          updatedAt: new Date()
        }
      });
    }

    return res.status(201).json(newCreatedInvoices);
  } catch (error) {
   
    return res.status(500).json({ message: 'Erro no servidor' });
  }
}
const  showSale = async (req: Request, res: Response) =>{
  try {
    const {id} = req.params
    const sales = await prisma.sale.findMany()
    if(!sales.length){
      return res.status(404).json({message: 'Venda não encontrada'})
    }

    return res.json(sales)
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Erro interno do servidor'})
   

  }
}
const  showSaleId = async (req: Request, res: Response) =>{


  try {
    const {id} = req.params
    const sales = await prisma.sale.findMany({where:{customerId: parseInt(id)}})
    if(!sales.length){
      return res.status(404).json({message: 'Venda não encontrada'})
    }

    return res.json(sales)
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Erro interno do servidor'})
   

  }
}


const productBestSelling = async (req: Request, res: Response) => {
  const bestSelling = await prisma.invoice.groupBy({
    by: ['productId'],
    _count: {
      productId: true,
    },
    orderBy: {
      _count: { productId: 'desc' },
    },
  })
  const productsWithSales = await Promise.all(
    bestSelling.map(async (item) => {
      const product = await prisma.product.findUnique({
        where: { id: item.productId },
        select: { name: true}, 
      });
  
      return {
        productId: item.productId,
        productName: product?.name,
        quality: item._count.productId
      };
    })
  );
  
  return res.status(200).json(productsWithSales)
}
export default {
  createSales,
  showSale,
  showSaleId,
  productBestSelling
};