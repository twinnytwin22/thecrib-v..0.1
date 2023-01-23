import React from 'react'
import HolderGate from 'ui/Sections/HolderGate'
import { getCribNfts } from 'lib/hooks/get-collection-data'
import { useAccount } from 'wagmi';

async function page() {

  return (
 <HolderGate/>
  )
}

export default page