require('dotenv').config();
import express from 'express';
import customerRouter from './routers/routers';

const app = express();

app.use(express.json());
app.use( customerRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
