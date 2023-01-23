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
        <div><svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
</svg></div>
      </button>
    </>
  )
}

export default SignOutButton