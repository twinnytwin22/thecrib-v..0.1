import React from 'react'
import TestFeed from './TestFeed'

function TestRoomHome() {
  return (
  
    <div className="grid grid-cols-3 h-full ">
    <div className='col-span-3 md:col-span-1 min-h-full'>
        <h2 className='mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white'>Your Messages</h2>
    <TestFeed/>
    </div>
    </div>
  )
}

export default TestRoomHome