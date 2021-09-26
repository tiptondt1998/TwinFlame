import React from 'react';
import {Img} from 'react-image'
import './styles.css';
import Nav from '../Nav/index'
import TwinFlame from '../../assets/TwinFlame.jpg';

const Home = () => {
  return (
    <div>
        <body>
        <div id='banner'>
        <img src={TwinFlame} alt='twin flame'/>
        </div>
        <div id="home-body">
        </div>
        <Nav />
        </body>
    </div>
    
  );
};

export default Home;