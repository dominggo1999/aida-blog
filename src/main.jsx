import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

const helmetContext = {};

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
