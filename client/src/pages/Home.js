import React from 'react';

import Login from '../components/Login';
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../style.css'

const Home = () => {
  return (
    <div className="body">
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
    </div>
  );
};

export default Home;

