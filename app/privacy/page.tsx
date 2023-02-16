import React from 'react'
import PrivacyPolicy from 'ui/Sections/PrivacyPolicy'
import { getPageSettings } from 'lib/hooks/pageSettings'

async function PrivacyPage() {
    const querysettings = await getPageSettings()
    const settings = await querysettings?.result[1]
  return (
    <div className='m-10'>
        <PrivacyPolicy data={settings}/>

    </div>
  )
}

export default PrivacyPage