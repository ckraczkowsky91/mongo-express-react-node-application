import mongoose from 'mongoose';
import { playerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', playerSchema);

// create controllers to interact with the database when making a REST request to API

// create a POST method to add data to the database via a request object
// the request object sends the data to the API with the route and the controller executes the function in the database
export const addNewPlayer = (req, res) => {
  // this will insert the body of the request into our this instance of the Player class
  let newPlayer = new Player(req.body);

  newPlayer.save((err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

// create a GET method to retrieve data from the database
export const getPlayers = (req, res) => {
  // use Mongo's find method to display all of the data in the collection
  // we could add parameters to the find method in the curly braces
  Player.find({}, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};
