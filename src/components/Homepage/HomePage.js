import React, { useEffect } from 'react';
import { googleSignIn } from '../../API';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ userId, setUserId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      navigate('/list');
    }
  });

  return (
    <div className='home-page-container'>
      <div className='slogan'>
        <div className='slogan-decoration'>--</div>
        <div>A Simple To-Do list help you arrange your life</div>
        <div className='slogan-decoration'>--</div>
      </div>
      <div className='start-btn' onClick={() => googleSignIn(setUserId)}>Sign In with Google</div>
    </div>
  )
}

export default HomePage;