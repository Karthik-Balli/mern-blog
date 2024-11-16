import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// MONGO is Variable that stores about information mongodb connection URI
// Check out the docs for more about MONGO variable
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDB Connected!')
}).catch((error) => {
    console.log(error);
})

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000! ");
})