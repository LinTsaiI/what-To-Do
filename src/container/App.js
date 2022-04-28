import React from 'react';
import { Routes, Route } from "react-router-dom";import HomePage from '../components/HomePage/HomePage';
import ListPage from '../components/ListPage/ListPage';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <div className='header'>What To Do</div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/list' element={<ListPage />} />
        </Routes>
    </div>
  );
}

export default App;