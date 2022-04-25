import React from 'react';
import './Item.css';

const Item = ({ content, updateList }) => {
  return (
    <div className='item-list'>
      {
        content.map((item, index) => {
          return (
            <div key={index} className='item-container'>
              <div className='item-content'>{item}</div>
              <button onClick={() => updateList(index)} className='delete-btn'>Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default Item;