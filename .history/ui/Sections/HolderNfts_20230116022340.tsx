'use client'
import React from 'react'


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