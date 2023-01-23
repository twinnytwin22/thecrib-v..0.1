'use client'
import React from 'react'
import { ConnectToCrib } from 'ui/Buttons/ConnectToCrib';
import NFTCard from 'ui/Cards/NFTCard';
import { useAccount } from 'wagmi';
function HolderNfts(nfts: any) {
    const NFTs = nfts?.nfts || ""
    const { address } = useAccount();
    const isConnected = !!address;    
  return (
<>
    {isConnected ? (
    <div>
        <div className='max-w-7xl mx-auto py-8'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-8'>
          {NFTs.nfts.map((nft: any, i: any) => (

          
            <NFTCard nft={nft} key={i} />))}
    
        </div>


    </div>
    </div> ) : (
        <ConnectToCrib/> ) } 
    
    </>
  )
}

export default HolderNfts