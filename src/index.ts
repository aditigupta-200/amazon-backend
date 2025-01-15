import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
// const cartRoutes = require('./routes/cartRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL, // Allow frontend's origin
  credentials: true, // Allow cookies if needed
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
