import { Router } from 'express';
import costumer from '../controllers/customers/customer';
import customer from '../controllers/customers/customer';


const router = Router();

router.post('/createCustomer', costumer.createCustomer);
router.get('/showCustomer', costumer.showCustomerAll);
router.get('/showCustomer/:id', costumer.showCustomer);
router.put('/updateCustomer/:id', customer.updateCustomer)
export default router;
