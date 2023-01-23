import React from 'react'
import HolderNfts from 'ui/Sections/HolderNfts'
import { getCribNfts } from 'lib/hooks/get-collection-data'
import { useAccount } from 'wagmi';
import { ConnectToCrib } from 'ui/Buttons/ConnectToCrib';

async function page() {
    const { address } = useAccount();
    const isConnected = !!address;    
    const nfts = await getCribNfts(address as string)
    console.log(nfts)

  return (
      <>
    {isConnected ? (
       <HolderNfts nft={nfts}/>
   ) : (
            <ConnectToCrib/> ) }
    </>
  )
}

export default page