'use client'

import React from 'react'
import { useSession } from "next-auth/react"
import { ConnectToCrib } from 'ui/Buttons/ConnectToCrib';
import Link from 'next/link';
import { GetENSName } from 'lib/hooks/getENS';

function HolderNfts() {
  const { data: session, status } = useSession()
      // Fetch content from protected route 
    if (session)
    console.log(session)

      
  return (
<>   
<section className="bg-white dark:bg-gray-900"> 
<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
     <div className="mx-auto max-w-screen-sm text-center">
    {status === 'unauthenticated'  ? (
        <>
        <div className="h-[100vh]">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Connect to view your collectibles</h2>
        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">If you are a holder of any NFT from Twinny Twin created by The Crib, you will have access to this exclusive area, with rare content, holder's benefits and more. Collect now, and connect now. See you inside!</p>
       <ConnectToCrib/>
       </div>
       </>
    
    ) 
    : (
          <>
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Your NFTs</h2>
    <p className='semi-bold uppercase inline-flex'>
     What's popping <GetENSName ownerAddress={session?.address}/> ?
    </p> 
    <Link href={"https://forms.gle/rLkD2NrUfWNWWS2i8"}>
    <button className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none dark:focus:ring-primary-800">Holder Form</button>
    </Link>
    </>
) }  </div>
</div>
    </section> 
    </>
  )
}

export default HolderNfts