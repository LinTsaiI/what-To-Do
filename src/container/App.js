import React, { useState, useEffect } from 'react';
import { Routes, Route, } from "react-router-dom";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import HomePage from '../components/HomePage/HomePage';
import ListPage from '../components/ListPage/ListPage';
import './App.css';

const App = () => {
  const [userAnonymousId, setUserAnonymousId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserAnonymousId(user.uid);
      } else {
        anonymouslySignIn();
      }
    });
  }, []);

  const anonymouslySignIn = async () => {
    await signInAnonymously(auth);
    onAuthStateChanged(auth, user => {
      setUserAnonymousId(user.uid);
    });
  }

  return (
    <div className='container'>
      <div className='header'>What To Do</div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/list' element={<ListPage userId={userAnonymousId}/>} />
        </Routes>
    </div>
  );
}

export default App;