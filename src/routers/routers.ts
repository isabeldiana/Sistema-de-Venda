import { Router } from 'express';
import costumer from '../controllers/customers/customer';
import products from '../controllers/products/products';
import sales from '../controllers/sales/sales';
import users from '../controllers/users/users';
const router = Router();


//Users
router.post('/createUser', users.createUser );

//customers
router.post('/createCustomer', costumer.createCustomer);
router.get('/showCustomer', costumer.showCustomerAll);
router.get('/showCustomer/:id', costumer.showCustomer);
router.put('/updateCustomer/:id', costumer.updateCustomer)

//products
 router.post('/createProduct', products.createdProduct);
 router.put('/updateProduct/:id', products.updateProduct);
 router.put('/updateStock/:id', products.stockEntry);
 router.get('/stock', products.showStok);


 // sales

 router.post('/createSales', sales.createSales);
 router.get('/showSale/:id', sales.showSaleId)
 router.get('/showSale', sales.showSale)
 router.get('/productBestSelling', sales.productBestSelling)




export default router;
