import { getRoadmap } from 'lib/hooks/rm-logic'
import React, {Suspense} from 'react'
import CribLoader from 'ui/Misc/CribLoader'
import MileStoneList from 'ui/Sections/RoadmapUI/MilestoneList'


async function RMpage() {
const res = await getRoadmap()
const data = res?.result

  return (
   
    <div className="flex w-screen flex-col items-center bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="/explore" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">🔥</span> <span className="text-sm font-medium">Not a collector yet? Let's make it happen!</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
        <div> 
      <Suspense fallback={<CribLoader/>}>
       <MileStoneList data={data}/>
       </Suspense>
       </div>
       
    </div>  
</div>





      
  )
}

export default RMpage