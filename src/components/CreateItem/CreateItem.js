import React, { useRef } from 'react';
import './CreateItem.css';

const CreateItem = ({ handelInputValue }) => {
  const inputField = useRef();

  const createNewItem = () => {
    if (inputField.current.value != '') {
      handelInputValue(inputField.current.value);
      inputField.current.value = '';
    }
  }
  return (
    <div className='create-item-container'>
      <input type='text' placeholder='Create a new to-do' ref={inputField} className='input-field'/>
      <input type='button' value='Create' onClick={createNewItem} className='create-btn'/>
    </div>
  )
}

export default CreateItem;