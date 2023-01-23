import React from 'react'
import HolderNfts from 'ui/Sections/HolderNfts'
import { getCribNfts } from 'lib/hooks/get-collection-data'
import { useAccount } from 'wagmi';

async function page() {

  return (
 <HolderNfts/>
  )
}

export default page