const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port =  5000;
const mongoURI = 'mongodb://localhost:27017/openelective';


app.use(express.json());


app.use(cors());


app.use(bodyParser.json());

// Routes
const studentRoutes = require('./rou');
app.use(studentRoutes);

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
