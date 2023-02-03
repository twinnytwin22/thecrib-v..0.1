'use client'

import React from 'react'
import { useState } from 'react';
import { useSession } from "next-auth/react"
import { ConnectToCrib } from 'ui/Buttons/ConnectToCrib';
import { GetENSName } from 'lib/hooks/getENS';
import HolderTabContainer from './HolderTabContainer';
import { useContractReads, erc721ABI } from 'wagmi';
import CribLoader from 'ui/Misc/CribLoader';
function HolderGate() {
  const [hasAccess, setHasAccess] = useState(false);
  const { data: session, status } = useSession()
      // Fetch content from protected route 
  const walletAddress = session?.address


  
  return (
<>   
<section className="bg-white dark:bg-gray-900"> 
<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
     <div className="mx-auto max-w-screen-sm text-center">
    {status === 'unauthenticated'  ? (
        <>
        <div className="h-[100vh]">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Connect to view your collectibles</h2>
        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 text-2xl md:text-lg">If you are a holder of any NFT from Twinny Twin created by The Crib, you will have access to this exclusive area, with rare content, holder's benefits and more. Collect now, and connect now. See you inside!</p>
       <ConnectToCrib/>
       </div>
       </>
    
    ) 
    : (
          <>
          {
          <div>
    <div className='flex uppercase flex-row mx-auto items-center content-center justify-content-center justify-center'> Welcome back, 
      <GetENSName ownerAddress={session?.address}/>!
    </div> 
   <HolderTabContainer/>
   </div>
   }
    </>
) }  </div>
</div>
    </section> 
    </>
  )
}

export default HolderGate