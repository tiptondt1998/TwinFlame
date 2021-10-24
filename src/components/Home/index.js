import React from 'react';
import {Img} from 'react-image'
import './styles.css';
import Nav from '../Nav/index'
import TwinFlame from '../../assets/TwinFlame.jpg';
import Auth from '../SignInAndSignUp';

const Home = () => {
  return (
    <div>
        <body>
        <Nav />
        <div id='banner'>
        <img src={TwinFlame} alt='twin flame'/>
        </div>
        <div id="home-body">
          <Auth />
        </div>
        </body>
    </div>
    
  );
};

export default Home;