import { Router } from 'express';
import createCustomer from '../controllers/customers/customer';

const router = Router();

router.post('/createCustomer', createCustomer);

export default router;
