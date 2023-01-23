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
        <ConnectToCrib/> ) } 
    
    </>
  )
}

export default HolderNfts