import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import HomePage from '../components/HomePage/HomePage';
import ListPage from '../components/ListPage/ListPage';
import './App.css';

const App = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserId(user.uid);
      }
    })
  }, [userId]);

  const setUserNull = () => {
    setUserId(null);
  }

  return (
    <div className='container'>
      <div className='header'>What To Do</div>
        <Routes>
          <Route path='/' element={userId ? <Navigate to='/list' /> : <HomePage userId={userId} setUserId={setUserId} />} />
          <Route path='/list' element={userId ? <ListPage userId={userId} setUserNull={setUserNull}/> : <Navigate to='/' />} />
        </Routes>
    </div>
  );
}

export default App;