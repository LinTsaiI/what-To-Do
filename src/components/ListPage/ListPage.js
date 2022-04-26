import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CreateItem from '../CreateItem/CreateItem';
import Item from '../Item/Item';
import './ListPage.css';

const ListPage = () => {
  const [list, setList] = useState([]);
  const [today, setToday] = useState('');

  useEffect(() => {
    getDate();  
  }, []);

  const getDate = () => {
    const today = new Date();
    const date = today.getDate();
    const day = today.getDay();
    const mon = today.getMonth();
    const year = today.getFullYear();
    let fullDate = new Date(Date.UTC(year, mon, date, day, 0, 0));
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setToday(fullDate.toLocaleString('en-US', options));
  } 
  
  const handelInputValue = (inputValue) => {
    setList(currentList => [...currentList, inputValue]);
  }

  const updateList = (index) => {
    const currentList = [...list];
    currentList.splice(index, 1);
    setList(currentList);
  }

  return (
    <div className='list-page'>
      <h2>--- {today} ---</h2>
      <CreateItem handelInputValue={handelInputValue}/>
      <Item content={list} updateList={updateList}/>
      <NavLink to='/'>
        <button className='home-page-btn'>Back to Home Page</button>
      </NavLink>
    </div>
  )
}

export default ListPage;