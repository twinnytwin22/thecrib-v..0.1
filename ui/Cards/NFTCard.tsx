import React from 'react'
import Link from 'next/link'
function NFTCard(nft: any) {
    const NFT = nft?.nft
   
  return (
 
<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" >
    <Link href="#">
       <img className="rounded-t-lg" src={NFT?.media[0].gateway} placeholder='/assets/blank.png' alt="" />
    </Link>
    <div className="flex p-5 justify-around h-20 text-clip">
        <Link href="#">
            <h5 className="inline-flex mb-2 text-md tracking-tight text-gray-900 dark:text-white text-clip ">{NFT.title}</h5>
        </Link>
       
    </div>
</div>

  )
}

export default NFTCard