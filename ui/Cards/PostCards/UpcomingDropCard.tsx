import React from 'react'
import { SocialShareRow } from 'ui/Misc/SocialShare'
import { UpcomingLayloBar } from 'ui/Modals/UpcomingDropNotify'

function UpcomingDropCard({image}: any) {
  return (
    <>
<div className="max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-md">
    <a href="/collection/cribmusicv1">
    </a>
    <div className="p-5">
      <img src={image} className="w-72 rounded-2xl mb-4"/>
      <div className='flex justify-between'>
       <UpcomingLayloBar/>
       <SocialShareRow/></div>
    </div>
</div>
</>
  )
}

export default UpcomingDropCard