require('dotenv').config();
import express from 'express';
import cors from 'cors';
import router from './routes/routes';
import { setupSwagger } from './swagger/swagger';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

setupSwagger(app)


app.listen(process.env.PORT);
