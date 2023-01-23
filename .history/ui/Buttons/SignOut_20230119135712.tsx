import React from 'react'
import { signOut } from 'next-auth/react';
import { disconnect } from '@wagmi/core';
import { PowerIcon } from '@heroicons/react/24/outline';

function SignOutButton() {
  return (
      <>
    
        <button onClick={(e) => {
           e.preventDefault()
           signOut()
           disconnect()
            }}>
        <div><PowerIcon/></div>
      </button>
    </>
  )
}

export default SignOutButton