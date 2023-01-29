'use client'
import React from 'react'
import { signOut } from 'next-auth/react';
import { useDisconnect } from "wagmi"
import Link from 'next/link';

function SignOutButton() {
    const { disconnect } = useDisconnect()
  return (
      <>
        <Link href={'/'} 
             onClick={(e) => {
                e.preventDefault()  
                disconnect()
                signOut()
                 }}>
        <svg role='button'
        className='h-8 w-8 ml-1 mt-1 cursor-pointer'      
        fill="none" stroke="white" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
</svg>
</Link>
    </>
  )
}

export default SignOutButton