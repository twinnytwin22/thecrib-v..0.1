'use client'
import React from 'react'
import { ConnectToCrib } from 'ui/Buttons/ConnectToCrib';
import NFTCard from 'ui/Cards/NFTCard';


function HolderNfts(nfts: any) {
    console.log(nfts)

    const NFTs = nfts?.nfts || ""
    console.log(NFTs)

    
  return (
<>
    HOLDER NFTS
    </>
  )
}

export default HolderNfts