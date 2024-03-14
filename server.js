const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const groupRoute = require("./routes/groupRoute.js");
const postRoute = require("./routes/postRoute.js");
const userRoute = require("./routes/userRoute.js");
const settingsRoute = require("./routes/settingsRoute.js");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());
 
app.use("/", routes);
app.use('/groups', groupRoute);
app.use('/posts', postRoute);
app.use('/users', userRoute);
app.use('/settings', settingsRoute);

// Swagger
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  // Listen for requests using Port number from .env file
  app.listen(process.env.PORT || 3000, () => {
    console.log('Connected to db and Web Server is listening at port ' + (process.env.PORT || 3000));
  });
});
 
