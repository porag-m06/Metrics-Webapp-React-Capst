import React from 'react';
import '../style/nav.css';
import { NavLink } from 'react-router-dom';
// import userImg from '../assets/planet.png';

function Nav() {
  return (
    <header className="nav-head">
      <div className="false-nav">
        <div className="nav">
          <div className="logo">
            {/* <img src={userImg} alt="logo" /> */}
            <h2>Metrices Webapp</h2>
          </div>
          <ul className="nav-items">
            <li className="nav-link"><NavLink to="/">Locations</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
