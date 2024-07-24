import { Router } from 'express';
import costumer from '../controllers/customers/customer';
import products from '../controllers/products/products';
import sales from '../controllers/sales/sales';
const router = Router();

//customers
router.post('/createCustomer', costumer.createCustomer);
router.get('/showCustomer', costumer.showCustomerAll);
router.get('/showCustomer/:id', costumer.showCustomer);
router.put('/updateCustomer/:id', costumer.updateCustomer)

//products
 router.post('/createProduct', products.createdProduct);
 router.put('/updateProduct/:id', products.updateProduct);
 router.put('/updateStock/:id', products.stockEntry);

 // sales

 router.post('/createSales', sales.createSales);
export default router;
