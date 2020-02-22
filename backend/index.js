import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

// initialize express
const app = express();
// define the port
const PORT = 3000;

// use Mongoose to connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MERN_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// define routing for the root
app.get('/', (req, res) =>
  res.send(`Our application is running ${PORT}`)
);

// runs using npm start command
app.listen(PORT, () =>
  console.log(`Our application is running on port ${PORT}`)
);
