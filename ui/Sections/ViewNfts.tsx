'use client'
import React from 'react'
import NFTCard from 'ui/Cards/NFTCard'
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

function ViewNfts(nfts: any) {
const NFTs = nfts.nfts
const collection = nfts.collection

const pathname = usePathname();


  return (
    <div className='max-w-7xl mx-auto py-8'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-8'>
          {NFTs.nfts.map((nft: any, i: any) => (

          
            <NFTCard nft={nft} key={i} />))}
    
        </div>


    </div>
  )
}

export default ViewNfts