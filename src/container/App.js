import React, { useState } from 'react';
import HomePage from '../components/HomePage/HomePage';
import ListPage from '../components/ListPage/ListPage';
import './App.css';

const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  
  return isHomePage
    ? (
      <div className='container'>
        <div className='header'>What To Do</div>
        <HomePage switchToListPage={() => setIsHomePage(false)}/>
      </div>
    )
    : (
      <div className='container'>
        <div className='header'>What To Do</div>
        <ListPage backToHomePage={() => setIsHomePage(true)}/>
      </div>
    )
}

export default App;