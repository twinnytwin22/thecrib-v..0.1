import React from 'react'
import Link from 'next/link'
function HolderNFTCard(nft: any) {
    const NFT = nft?.nft
   
  return (
 
<div className="min-w-48 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" >
       <img className="rounded-t-lg w-full" src={NFT ? NFT?.media[0]?.gateway  : "/assets/newbgdark.png"} placeholder='/assets/blank.png' alt="" />
    <div className="flex p-5  h-16 text-clip">
            <h3 className="inline-flex mb-2 text-md tracking-tight text-gray-900 dark:text-white text-clip ">NFT TITLE</h3>
    </div>
</div>

  )
}

export default HolderNFTCard