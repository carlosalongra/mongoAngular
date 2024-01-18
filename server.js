var express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/route');

(async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/ExampleApp', { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
      app.listen(8080, () => {
        console.log('Server started on port 8080');
      });
    } catch (err) {
      console.error(err);
    }
  })();

var app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(routes);