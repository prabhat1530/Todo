const express = require('express');
const cors = require('cors'); // Import cors
const userRouter = require('./Routes/todo');
const { mongodbConnection } = require('./connection');
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Your React app URL (or any other domain you want to allow)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

const PORT = process.env.PORT || 4000; // Make sure the port is set correctly

app.use(express.json());
app.use('/api/todo', userRouter);

mongodbConnection().then(() => {
  console.log('MongoDB connected');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
