import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js'
import cors from 'cors'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO)

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})

app.use('/api/user', userRoutes);