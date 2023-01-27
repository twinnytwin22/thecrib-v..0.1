import { getIpfsData } from 'lib/hooks/get-collection-data'
import React from 'react'
import CribLoader from 'ui/Misc/CribLoader'
import TestUserDashboard from 'ui/Testing/TestTabGroup'

async function page() {
  const contractAddress = '0x148280a1395af6F430248c2E4B8063c69B7cA23E'
  const metaData = await getIpfsData(contractAddress)

  console.log(metaData, 'other md')
  return (
    <div className='flex items-center justify-center content-center justify-items-center'>

    <div className=''>

<TestUserDashboard/>
    </div>
    </div>
  )
}

export default page