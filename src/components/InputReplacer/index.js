import React, { useState } from 'react';

function InputReplacer() {
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className='queue-number card'>
      {isEditing ? (
        <input type="number" value={inputValue} onChange={handleChange} />
      ) : (
        <p >{inputValue}</p>
      )}
      <button className='button' onClick={handleClick}>
        {isEditing ? 'Replace' : 'Enter'}
      </button>
    </div>
  );
}

export default InputReplacer;
