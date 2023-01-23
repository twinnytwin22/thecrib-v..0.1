import React from 'react'
import { signOut } from 'next-auth/react';


function SignOutButton() {
  return (
      <>
    
        <button onClick={(e) => {
           e.preventDefault()
           signOut()
            }}>
        <div>SignOut</div>
      </button>
    </>
  )
}

export default SignOutButton