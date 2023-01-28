import { getIpfsData } from 'lib/hooks/get-collection-data'
import React from 'react'
import { LayloCard } from 'ui/Cards/LayloCard'
import CribLoader from 'ui/Misc/CribLoader'
import TestingPanel from 'ui/Testing/TestingPanel'
import TestUserDashboard from 'ui/Testing/TestTabGroup'

async function page() {
  const contractAddress = '0x148280a1395af6F430248c2E4B8063c69B7cA23E'
  const metaData = await getIpfsData(contractAddress)

  console.log(metaData, 'other md')
  return (
    <div className="flex w-screen flex-col items-center bg-white dark:bg-gray-900">
   <LayloCard/>
    </div>
  )
}

export default page





