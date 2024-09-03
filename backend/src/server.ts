import express, { Request, Response, Application, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import Stripe from 'stripe';
import User from './models/User';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import { authenticateToken, AuthRequest } from './middleware/authMiddleware';
import Transaction, { ITransaction } from './models/Transaction'; // Import Transaction model

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow requests from this origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
//   allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
// }));
// // Middleware
app.use(cors({
  origin: 'https://task-2-nu-nine.vercel.app', // Ensure no trailing slash
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true // If you are using cookies for authentication
}));
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI!, {
 
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api/user', userRoutes);

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.get('/test', (req: Request, res: Response) => {
  res.send('working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
