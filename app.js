const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');
const logger = require('morgan');
require('dotenv').config();
// const path = require('path');
const {banksRouter} = require('./routes/api');
const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

//Middlewares
app.use(logger(formatsLogger));
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

//Routing
app.use('/banks', banksRouter);
app.use((_, res) => {
    res.status(404).json({
        status: 'error',
        code: '404',
        message: 'Not found'
    });
});

//Error handler
app.use((error, _, res, __) => {
    const {code = 500, message = "Server error"} = error;
    res.status(code).json({
        status: 'fail',
        code,
        message,
    });
});

const { DB_HOST, PORT = process.env.port || 3003 } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log('Database connection successful');
  })
  .catch(error => console.log("EERROORRR", error));

module.exports = app;