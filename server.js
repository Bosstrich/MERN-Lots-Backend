const express = require('express');
const mongoose = require('mongoose');
const rhemaRoutes = require('./routes/rhemaRoutes');
require('dotenv').config()

const app = express();

app.use((req, res, next) => {

    next();

})

//looks if the body contains JSON and attaches it to Request Object
app.use(express.json());


//routes
app.use('/api/rhemas' , rhemaRoutes);

// connect to db
// Mongoose Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    app.listen(process.env.PORT, (req, res) => {

        console.log('Connected To the Database & Listening to Port', process.env.PORT);
    })

  })
  .catch((err) => {

    console.log(err);
  })