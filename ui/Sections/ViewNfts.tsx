import React from 'react'
import NFTCard from 'ui/Cards/NFTCard'

function ViewNfts({props}: any) {
const NFTs = props[3]



  return (
    <div className='max-w-7xl mx-auto py-8'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-8'>
          {NFTs?.nfts && NFTs?.nfts.map((nft: any, i: any) => (          
            <NFTCard nft={nft} key={i} />))}
        </div>


    </div>
  )
}

export default ViewNfts