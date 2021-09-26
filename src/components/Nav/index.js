import React from 'react';
import './style.css'
import { Link } from "react-router-dom";
import Menu from '../Menu'

const Nav = () => {
    return(
        <div id='nav_menu'>
                <ul>
                <li><button><Link to='menu'>Menu</Link></button></li>
                {/* <li id="live-events"><button><Link to='../live-events/live-events'>Live Events</Link></button></li>
                <li id='now-hiring'><button><Link to='../jobs/jobs'>Now Hiring</Link></button></li> */}
                </ul>
        </div>
    );

};
export default Nav;