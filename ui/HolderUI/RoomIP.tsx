import React from 'react'
import { LayloCard } from 'ui/Cards/LayloCard'

function RoomIP() {
  return (
  <>
  <div className='mt-16'>
  <h1 className='mb-2 text-xl font-bold'>Rooms are loading!</h1> 
         <p className='mb-10'>Sign Up to be notified when the rooms are ready for you!</p> 
          <div className='flex max-w-sm mx-auto'>

      <LayloCard/>
      </div>
    <div className="grid grid-cols-4 h-full ">
    <div className='col-span-4 md:col-span-2 min-h-full'>
     
    </div>
    </div> 
    </div>
    </>
  )
}

export default RoomIP