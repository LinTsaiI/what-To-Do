import React from 'react';
import './HomePage.css';

const HomePage = ({ switchToListPage }) => {
  return (
    <div className='home-page-container'>
      <div className='slogan'>-- A Simple To-Do list help you arrange your life --</div>
      <button onClick={switchToListPage}  className='start-btn'>Start to use</button>
    </div>
  )
}

export default HomePage;