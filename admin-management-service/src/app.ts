import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import cors from 'cors';
import adminRoutes from './routes/adminRoutes';


// Initialize environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3002', // Allow only your frontend's origin
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // Enable credentials if needed
  }));

// Routes
app.use('/api', adminRoutes);

// Port configuration
const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
if (!MONGO_URI) {
    console.error('Error: MONGO_URI is not defined in the environment variables');
    process.exit(1);
}


mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
