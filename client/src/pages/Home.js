import React from 'react';

import Login from '../components/Login';
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../style.css'



const Home = () => {
  return (
    <body>
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
    </body>
  );
};

export default Home;

