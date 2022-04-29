import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { getToDo, updateToDo } from '../../API';
import CreateItem from '../CreateItem/CreateItem';
import Item from '../Item/Item';
import './ListPage.css';

const ListPage = ({ userId, setUserNull }) => {
  const [list, setList] = useState([]);
  const [today, setToday] = useState('');
  const [ isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate('/');
    } else {
      getDate();
      getToDo(userId, list, setList, setIsLoading);
    }
  }, [userId]);

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
    let currentList = [...list];
    currentList = [...currentList, inputValue];
    updateToDo(userId, currentList);
    setList(currentList);
  }

  const updateList = (index) => {
    let currentList = [...list];
    currentList.splice(index, 1);
    updateToDo(userId, currentList);
    setList(currentList);
  }

  const signOutFromGoogle = () => {
    signOut(auth).then(() => {
      setUserNull(null);
    }).catch(error => console.log(error))
  }

  return (
    <div className='list-page'>
      <h2>--- {today} ---</h2>
      <CreateItem handelInputValue={handelInputValue}/>
      <Item content={list} deleteItem={updateList} dataState={isLoading}/>
      <button className='sign-out-btn' onClick={() => signOutFromGoogle()}>Sign Out</button>
    </div>
  );
}

export default ListPage;