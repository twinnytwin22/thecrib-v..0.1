'use client'
import React, { useState } from 'react';

const Tooltip = ({ text, children }: any) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {show && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '5%',
            backgroundColor: 'black',
            color: 'white',
            padding: '4px',
            borderRadius: '4px',
            fontSize: '0.8rem',
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
