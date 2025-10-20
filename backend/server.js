import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';  
import technicianRouter from './routes/technicianRoutes.js';// Import your user routes
import serviceRouter from './routes/serviceRoutes.js';

// App config
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// API Test Endpoint
app.get('/', (req, res) => {
  res.send('API WORKING');
});

// Mount User Routes
app.use('/api/user', userRouter);
app.use('/api/technicians', technicianRouter);
app.use('/api/service', serviceRouter);

  // This is very important

// Start Server
app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
