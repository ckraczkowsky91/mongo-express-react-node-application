import React from 'react';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';
import PlayerForm from './Player/PlayerForm';

function App() {
  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col s12'>Menu</div>
      </div>
      <div className='row'>
        <div className='col s3'><PlayerList /></div>
        <div className='col s9'><PlayerSingle /></div>
      </div>
      <div className='row'>
        <div className='col s12'><PlayerForm /></div>
      </div>
    </div>
  );
};

export default App;