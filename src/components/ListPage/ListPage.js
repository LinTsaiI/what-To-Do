import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
import { getToDo, updateToDo } from '../../API';
import CreateItem from '../CreateItem/CreateItem';
import Item from '../Item/Item';
import './ListPage.css';

const ListPage = () => {
  const [userId, setUserId] = useState(null);
  const [list, setList] = useState([]);
  const [today, setToday] = useState('');
  const navigate = useNavigate();
  // const [ isLoading, setIsLoading] = useState(true);
  const isLoading = useRef(true);

  useEffect(() => {
    getDate();
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      getToDo(userId, list, setList);
      isLoading.current = false;
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      updateToDo(userId, list);
    }
  }, [list]);

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

  const signOutFromGoogle = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch(error => console.log(error))
  }

  return (
    <div className='list-page'>
      <h2>--- {today} ---</h2>
      <CreateItem handelInputValue={handelInputValue}/>
      <Item content={list} deleteItem={updateList} dataState={isLoading}/>
      <button className='sign-out-btn' onClick={() => signOutFromGoogle()}>Sign Out</button>
    </div>
  )
}

export default ListPage;