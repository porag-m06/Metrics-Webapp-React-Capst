import React from 'react';
import '../style/nav.css';
import { IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { RiSettings5Fill } from 'react-icons/ri';
// import userImg from '../assets/planet.png'; BsMic

function Nav() {
  return (
    <header className="nav-container">
      <div className="logo">
        <IoIosArrowBack />
        {' '}
        AirIdX
      </div>
      <div className="search">
        <input type="search" name="search" id="search" placeholder="search cities for air index..." />
      </div>
      <div>
        <BsFillMicFill className="react-icon" />
        <RiSettings5Fill className="react-icon" />
      </div>
    </header>
  );
}

export default Nav;
