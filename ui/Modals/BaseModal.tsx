'use client'
import React, { useState } from 'react';

function BaseModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <button onClick={() => setIsOpen(false)}>Close</button>
          <img src="path/to/image.jpg" alt="Modal Image" />
        </div>
      )}
    </>
  );
}

export default BaseModal;
