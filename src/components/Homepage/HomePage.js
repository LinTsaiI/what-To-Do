import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home-page-container'>
      <div className='slogan'>
        <div className='slogan-decoration'>--</div>
        <div>A Simple To-Do list help you arrange your life</div>
        <div className='slogan-decoration'>--</div>
      </div>
      <NavLink to='/list'>
        <button className='start-btn'>Start to use</button>
      </NavLink>
    </div>
  )
}

export default HomePage;