import { getIpfsData } from 'lib/hooks/get-collection-data'
import React from 'react'
import HeroUpComingDropBanner from 'ui/HeroBanners/HeroUpcomingDropBanner'
import { IPFSRenderer } from 'ui/Misc/IPFSRenderer'
import TestCard from 'ui/Testing/TestCard'
import TestContactForm from 'ui/Testing/TestContactForm'




async function page() {
  const contractAddress = '0x148280a1395af6F430248c2E4B8063c69B7cA23E'
  const metaData = await getIpfsData(contractAddress)
  const ipfsProps = [
    metaData, 
    contractAddress
  ]
  console.log(metaData, 'other md')
  return (
    <div className='flex items-center justify-center content-center justify-items-center'>

    <div className=''>
    <HeroUpComingDropBanner/>
   <TestContactForm/>
    </div>
    </div>
  )
}

export default page