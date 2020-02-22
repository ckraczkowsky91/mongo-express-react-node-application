import express from 'express';

// initialize express
const app = express();
// define the port
const PORT = 3000;

// define routing for the root
app.get('/', (req, res) =>
  res.send(`Our application is running ${PORT}`)
);

// runs using npm start command
app.listen(PORT, () =>
  console.log(`Our application is running on port ${PORT}`)
);
