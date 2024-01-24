'use client'
import React, { useState } from 'react';

const FloatingLabelInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative w-full my-2 ${isFocused ? '' : 'mb-2'}`}>
      <input
        type='text'
        title='text'
        id='text'
        className='my-2 bg-[#202020] focus:outline-none pl-6 py-3 rounded-lg w-full'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor='text'
        className={`absolute left-6 transition-all ${
          isFocused ? 'text-[#febd69] text-sm top-0' : 'text-gray-400 top-5'
        }`}
      >
        Username
      </label>
    </div>
  );
};

export default FloatingLabelInput;
