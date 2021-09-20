import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Routes from './Routes';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

const App = () => {
  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
