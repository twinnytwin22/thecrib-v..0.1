import React from 'react'
import { signOut } from 'next-auth/react';
import { disconnect } from '@wagmi/core';

function SignOutButton() {
  return (
      <>
    
        <button onClick={(e) => {
           e.preventDefault()
           signOut()
           disconnect()
            }}>
        <div>SignOut</div>
      </button>
    </>
  )
}

export default SignOutButton