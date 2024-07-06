// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { auth0Domain, auth0ClientId } from './auth0-config';

ReactDOM.render(
  <Auth0Provider
    domain={auth0Domain}
    clientId={auth0ClientId}
    redirectUri={window.location.origin + '/success'}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>,
  document.getElementById('root')
);
