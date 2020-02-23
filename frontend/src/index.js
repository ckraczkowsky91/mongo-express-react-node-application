import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

// render our application to React's virtual DOM
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
