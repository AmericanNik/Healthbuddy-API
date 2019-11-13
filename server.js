const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

//load env vars

dotenv.config({ path: './config/config.env' });

// Connect to database

connectDB();

//Route files
const healthbuddies = require('./routes/healthbuddies');

// Connect to Dabatase

const app = express();

//  Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/healthbuddies', healthbuddies);
//  Mount routers

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on http://localhost:${PORT}`
      .brightBlue.bold.underline
  )
);

// handle unhandled promoise rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //close server and exit process
  server.close(() => process.exit(1));
});
