import React from 'react'
import { signOut } from 'next-auth/react';


function SignOut() {
  return (
      <>
    
        <a onClick={(e) => {
           e.preventDefault()
           signOut()
            }}>
        <div>SignOut</div>
      </a>
    </>
  )
}

export default SignOut