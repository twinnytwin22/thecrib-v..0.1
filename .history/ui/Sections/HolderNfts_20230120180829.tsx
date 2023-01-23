'use client'
import { getCribNfts, getRequestOptions} from 'lib/hooks/get-collection-data';
import React from 'react'
import { useSession } from "next-auth/react"
import { ConnectToCrib } from 'ui/Buttons/ConnectToCrib';
import CribLoader from 'ui/Misc/CribLoader';
import { useAccount } from 'wagmi';
import { unstable_getServerSession } from "next-auth/next"

const ethApiKey = process.env.NEXT_PUBLIC_ALCHEMY_ID
const polygonApiKey = process.env.NEXT_PUBLIC_POLYGON_ALCHEMY_ID
function HolderNfts() {
  const { data: session, status } = useSession()
  const { address } = useAccount();
    const isConnected = !!address ;    
    const loading = "loading"
      // Fetch content from protected route 
    if (session)
    console.log(session)

      
  return (
<>   
<section className="bg-white dark:bg-gray-900"> 
<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
     <div className="mx-auto max-w-screen-sm text-center">
    {!session ? (
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
    <p>

    </p> 
    </>
) }  </div>
</div>
    </section> 
    </>
  )
}

export default HolderNfts