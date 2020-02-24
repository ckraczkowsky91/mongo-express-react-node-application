import React, { Component } from 'react';
import axios from 'axios';

class PlayerForm extends Component {
// Create the function that is used in the form
  submitPlayer(event) {
    event.preventDefault();
// Use axios to add data to the database using the POST endpoint
    const url = 'http://localhost:4000/players';
    axios.post(url, {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value
      })
      .then((response) => {
        console.log('Response: ' + response);
      })
      .catch((error) => {
        console.log('ERROR: ' + error);
      });
  };

  render() {
    return(
      <div className="row">
        <h1 className='center'>Add a new player</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" ref='firstName' type="text" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" ref='lastName' type="text" />
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className='input-field col s6'>
              <input id='phone' ref='phone' type='text' />
              <label htmlFor='phone'>Phone</label>
            </div>
            <div className='input-field col s6'>
              <input id='email' ref='email' type='text' />
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <button className='btn waves-effect waves-light' type='submit' name='action'>Add player</button>
        </form>
      </div>
    );
  };
};

export default PlayerForm;
