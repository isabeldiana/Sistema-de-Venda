require('dotenv').config();
import express from 'express';
import cors from 'cors';
import Router from './routers/routers';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', Router);

const PORT = process.env.PORT;
app.listen(PORT);
