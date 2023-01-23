'use client'
import React from 'react'
import { ConnectToCrib } from 'ui/Buttons/ConnectToCrib';
import { useAccount } from 'wagmi';
function HolderNfts() {
    const { address } = useAccount();
    const isConnected = !!address;    
  return (
<>
    {isConnected ? (
    <div>HolderNfts</div> ) : (
        <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Start your free trial today</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Flowbite Platform for 30 days. No credit card required.</p>
           <ConnectToCrib/>
        </div>
    </div>
</section> ) } 
    
    </>
  )
}

export default HolderNfts