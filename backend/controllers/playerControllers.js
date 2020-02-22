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
  // we could add a filter to the find method in the curly braces
  Player.find({}, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

// create a GET method to retrieve data from the database for a particular entity
export const getPlayer = (req, res) => {
  Player.findById(req.params.PlayerId, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

// create a PUT method to update the data of a single entity
export const updatePlayer = (req, res) => {
  // the body of the request will contain the data to update so we need to pass it via req.body
  // add {new: true} parameter so the response contains the updated entity and not the old entity
  Player.findOneAndUpdate({ _id: req.params.PlayerId }, req.body, {new: true}, (err, Player) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Player);
    };
  });
};
