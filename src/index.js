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
        <Helmet>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=WindSong:wght@500&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
