import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
import { googleSignIn } from '../../API';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserId(user.uid);
        navigate('/list');
      }
    })
  }, [userId]);

  return (
    <div className='home-page-container'>
      <div className='slogan'>
        <div className='slogan-decoration'>--</div>
        <div>A Simple To-Do list help you arrange your life</div>
        <div className='slogan-decoration'>--</div>
      </div>
      <div className='start-btn' onClick={() => googleSignIn()}>Sign In with Google</div>
    </div>
  )
}

export default HomePage;