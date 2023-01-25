import { getIpfsData } from 'lib/hooks/get-collection-data'
import React from 'react'
import HeroUpComingDropBanner from 'ui/HeroBanners/HeroUpcomingDropBanner'
import { IPFSRenderer } from 'ui/Misc/IPFSRenderer'
import TestCard from 'ui/Testing/TestCard'




async function page() {
  const contractAddress = '0x148280a1395af6F430248c2E4B8063c69B7cA23E'
  const metaData = await getIpfsData(contractAddress)
  const ipfsProps = [
    metaData, 
    contractAddress
  ]
  console.log(metaData, 'other md')
  return (
    <div className='h-[90vh]'>
    <HeroUpComingDropBanner/>
    <TestCard data={ipfsProps}/>
    
    </div>
  )
}

export default page