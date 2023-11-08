const express = require('express');
const { User } = require('./models'); // Adjusted the path to models/index.js


const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.json').development; // imports config

// creates a new Express application
const app = express();
const port = 3000;

// create a Sequelize instance with the configs.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
);


// a route that gets all users and sends them the response.
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('An error occurred while fetching users');
  }
});


// Root route handler that sends a redirect to the /users route.
app.get('/', (req, res) => {
  res.redirect('/users');
});


// Start server
app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
