import React from 'react';

// Give the component access to props passed from the main App class
const PlayerSingle = (props) => {
  return(
    <div className='row'>
      <div className='col s12'>
        <div className='card'>
          <div className='card-image'>
            <img alt='soccer' src='https://images.unsplash.com/photo-1552667466-07770ae110d0' />
            <span className='card-title'>{props.player.firstName} {props.player.lastName}</span>
          </div>
          <div className='card-content'>
            <p>Phone: {props.player.phone} - Email: {props.player.email}</p>
            <p>Strength: {props.player.strength} - Endurance: {props.player.endurance}</p>
          </div>
          <div className='card-action'>
            Team: {props.player.team}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
