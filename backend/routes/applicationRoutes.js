import { addNewPlayer, getPlayers, getPlayer, updatePlayer } from '../controllers/playerControllers';

// the controller needs to be connected to the route so that when the route is called from the request it executes the controller
const routes = (app) => {
  // create a 'players' route that will have multiple endpoints for REST methods like GET and POST
  app.route('/players')
  // create a GET request that will execute the getPlayers function from the controller
    .get(getPlayers)
  // create a route to execute a POST request to execute the addNewPlayer function from the controller
  // this function will add a new player to the database
  // if the database and collection is not set up then they will be created using the name of the database in index.js and the name of the route
    .post(addNewPlayer);

  // create a route to get a single player using their ID
  app.route('/players/:PlayerId')
  // create a GET request that will execute the getPlayer function from the controllers
    .get(getPlayer)
  // create a PUT request that will execute the updatePlayer function from the controllers
    .put(updatePlayer);
};

export default routes;
