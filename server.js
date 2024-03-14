const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());
 
app.use("/", routes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  // Listen for requests using Port number from .env file
  app.listen(process.env.PORT || 3000, () => {
    console.log('Connected to db and Web Server is listening at port ' + (process.env.PORT || 3000));
  });
});
 
