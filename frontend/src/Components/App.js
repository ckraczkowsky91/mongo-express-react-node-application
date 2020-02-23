import React, { Component } from 'react';
import axios from 'axios';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';
import PlayerForm from './Player/PlayerForm';

class App extends Component {
// Create a constructor
  constructor(props) {
// Initialize the constructor with properties to be used in the class
    super(props);
// Create a state to pass data between components
    this.state = {
      players: [],
      currentPlayer: {}
    };
// Bind the function to the App class so that it can be used
//    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  };

// Use the componentDidMount lifecycle method of React Components
  componentDidMount() {
// Provide axios the endpoint that we created to GET the correct data
    const url = 'http://localhost:4000/players';
    axios.get(url)
      .then((Response) => {
        this.setState({
          players: Response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

// Create a function to update the state of the App class
  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item
    });
  };

  render() {
    return(
      <div className='container-fluid'>
        <div className='row'>
          <div className='col s12'>Menu</div>
        </div>
        <div className='row'>
          <div className='col s3'><PlayerList players={this.state.players}
            updateCurrentPlayer={this.updateCurrentPlayer}/></div>
          <div className='col s9'><PlayerSingle /></div>
        </div>
        <div className='row'>
          <div className='col s12'><PlayerForm /></div>
        </div>
      </div>
    );
  };
};

export default App;
