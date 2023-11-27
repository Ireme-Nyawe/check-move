// app.js
import  express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://akimanaj41:akimanaj41@cluster0.cshu9wg.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express with Mongoose!');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });